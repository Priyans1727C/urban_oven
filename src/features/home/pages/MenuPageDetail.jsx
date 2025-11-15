import MenuCard from '../components/MenuCard';
import CategoryCard from '../components/CategoryCard';
import { mockMenuItems } from '../../../shared/data/mockData';


const menuItems =mockMenuItems;

function MenuPageDetail() {
    return (
        <>
            <div className="min-h-screen relative overflow-hidden">
                <CategoryCard />
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-gradient-to-r from-orange-300 to-pink-300 rounded-full opacity-20 animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${3 + Math.random() * 4}s`
                            }}
                        />
                    ))}
                </div>



                {/* Menu Cards Grid */}
                <div className="container mx-auto px-8 pb-16 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center max-w-7xl mx-auto">
                        {menuItems.map((item, index) => (
                            <div
                                key={item.id}
                                className="animate-fade-in-up hover:z-10 relative"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <MenuCard {...item} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Floating Action Button */}
                <div className="fixed bottom-8 right-8 z-50"></div>
            </div>
        </>
    );
}

export default MenuPageDetail;