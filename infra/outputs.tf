output "instance_public_ip" {
  description = "Public IP of the web instance"
  value       = aws_instance.web.public_ip
}

output "instance_public_dns" {
  description = "Public DNS of the instance"
  value       = aws_instance.web.public_dns
}

output "ssh_key_name" {
  value = aws_key_pair.deploy_key.key_name
}
