# Infra for deploying Frontend React app to a small EC2 instance

This folder contains Terraform and Ansible artifacts to provision an AWS t2.micro (Free Tier eligible) instance and deploy a built React app to Nginx.

Files added
- `main.tf` - Terraform resources (AMI lookup, EC2 instance, key pair, security group)
- `variables.tf` - Terraform variables and defaults
- `outputs.tf` - Useful outputs (instance public IP/DNS)
- `terraform.tfvars.example` - Example variable values
- `ansible/site.yml` - Ansible playbook to install nginx and copy the React build
- `ansible/inventory.ini.example` - Example inventory to edit with the instance IP

Quick steps

1. Configure AWS credentials (env vars or `~/.aws/credentials`).

2. Create or choose an SSH keypair. Example to create a dedicated key pair:

```bash
ssh-keygen -t rsa -b 4096 -f ~/.ssh/react_deploy_key -C "react-deploy"
```

3. Initialize and apply Terraform

```bash
cd Frontend/infra
terraform init
# Use an absolute path for ssh_public_key_path or copy values into terraform.tfvars
terraform apply -var="ssh_public_key_path=/home/youruser/.ssh/react_deploy_key.pub" -auto-approve
```

4. Build your React app locally (from the project root):

```bash
cd Frontend
npm install
npm run build
```

5. Prepare Ansible build folder and inventory

```bash
# copy build contents into infra/ansible/react_build
rm -rf infra/ansible/react_build || true
mkdir -p infra/ansible/react_build
cp -r build/* infra/ansible/react_build/

# get the public IP from terraform output and update inventory
terraform output -raw instance_public_ip
# then edit ansible/inventory.ini.example -> ansible/inventory.ini with the IP and correct private key path
```

Example `ansible/inventory.ini` (fill IP):

```
[web]
1.2.3.4 ansible_user=ubuntu ansible_ssh_private_key_file=/home/youruser/.ssh/react_deploy_key
```

6. Run Ansible to deploy

```bash
cd Frontend/infra/ansible
ansible-playbook -i inventory.ini site.yml
```

7. Visit http://INSTANCE_PUBLIC_IP

Cleanup (destroy infra)

```bash
cd Frontend/infra
terraform destroy -var="ssh_public_key_path=/home/youruser/.ssh/react_deploy_key.pub" -auto-approve
```

Notes & tips
- Replace `ssh_allowed_cidr` and `http_allowed_cidr` in variables for stricter access (limit SSH to your IP).
- The Terraform reads your public key file and uploads it as an EC2 key pair; do not upload private keys.
- If you prefer S3 static hosting, I can provide Terraform + policy snippets to host the `build/` as an S3 static website.
