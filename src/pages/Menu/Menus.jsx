import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Usemenus from '../../Hooks/Usemenus';
import { useState } from 'react';
import Foodlist from '../../Component/Foodcart/Foodlist';

const Menus = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu,loading] =Usemenus()
    const burger = menu.filter(item => item.categori === "burger");
    const pizza = menu.filter(item => item.categori === "pizza");
    const icecream = menu.filter(item => item.categori === "ice-cream")
    const sandwich = menu.filter(item => item.categori === "sandwich")
    const milkshake = menu.filter(item => item.categori === "milkshake")
    const cake = menu.filter(item => item.categori === "cake")
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/0Xc9N8p/image.png)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Our Menus</h1>
                        <button className="btn btn-outline btn-neutral px-8 text-white">Home</button>
                    </div>
                </div>
            </div>
           <div className='text-center'>
                <h1 className='text-[#FFCC00] text-2xl mt-12 font-semibold mb-2'>Menu</h1>
                <h1 className='text-5xl mb-5 font-bold text-white'>Just Choose From The Best</h1>

           </div>
            {/* card ssss */}
            <div className='flex justify-center'> 

              
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className=" mt-16">
                    <TabList >
                        <Tab>                  
                            <img className='hover:bg-[#FFCC00]' src={"https://i.ibb.co/QCD9m2V/menu-2.png"} alt="" />
                          </Tab>
                        <Tab>                  
                            <img className='hover:bg-[#FFCC00]' src={"https://i.ibb.co/LShkqnm/menu-1.png"} alt="" />
                          </Tab>
                        <Tab>                  
                            <img className='hover:bg-[#FFCC00]' src={"https://i.ibb.co/c39zR4J/menu-3.png"} alt="" />
                          </Tab>
                        <Tab>                  
                            <img className='hover:bg-[#FFCC00]' src={"https://i.ibb.co/qp2B7QX/menu-4.png"} alt="" />
                          </Tab>
                        <Tab>                  
                            <img className='hover:bg-[#FFCC00]' src={"https://i.ibb.co/HVNfQKN/menu-5.png"} alt="" />
                          </Tab>
                        <Tab>                  
                            <img className='hover:bg-[#FFCC00]' src={"https://i.ibb.co/P5N7pCX/menu-6.png"} alt="" />
                          </Tab>
                      
                    </TabList>

                    <TabPanel>
                      <div className='grid gap-7 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                            {
                                pizza.map(item => <Foodlist key={item.id} item={item} />)
                            }
                      </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid gap-7 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                        {
                            burger.map(item => <Foodlist key={item.id} item={item} />)
                        }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid gap-7 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                        {
                            sandwich.map(item => <Foodlist key={item.id} item={item} />)
                        }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid gap-7 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>

                        {
                            milkshake.map(item => <Foodlist key={item.id} item={item} />)
                        }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid gap-7 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                        {
                            icecream.map(item => <Foodlist key={item.id} item={item} />)
                        }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid gap-7 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                        {
                            cake.map(item => <Foodlist key={item.id} item={item} />)
                        }
                        </div>
                    </TabPanel>
                </Tabs>
               {/* {categories.map(items =><MenusTab key={items.label} label={items.label} icon={items.icon}></MenusTab>)} */}

            </div>
        </div>
    );
};

export default Menus;