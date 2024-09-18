import { InspectionPanel, RectangleHorizontal, Scaling, SunMedium, SwatchBook } from 'lucide-react'
import React from 'react'
import {
     Accordion,
     AccordionContent,
     AccordionItem,
     AccordionTrigger,
} from "~/components/ui/accordion"
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

function Sidebar() {
     return (
          <aside className="hidden w-64 shrink-0 border-r bg-card lg:block">
               <nav className="space-y-1 px-4">
                    <Accordion type="single" collapsible className="w-full" defaultValue='item-1'>
                         <AccordionItem value="item-1">
                              <AccordionTrigger>
                                   <div className='flex gap-2 items-center'>
                                        <InspectionPanel strokeWidth={"1.5px"} />
                                        Material
                                   </div>
                              </AccordionTrigger>
                              <AccordionContent>
                                   <RadioGroup defaultValue="glass">
                                        <div className="flex items-center space-x-2">
                                             <RadioGroupItem value="glass" id="r1" />
                                             <Label htmlFor="r1">Glass</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                             <RadioGroupItem value="acrylic" id="r2" />
                                             <Label htmlFor="r2">Acrylic</Label>
                                        </div>
                                   </RadioGroup>
                              </AccordionContent>
                         </AccordionItem>
                         <AccordionItem value="item-2">
                              <AccordionTrigger>
                                   <div className='flex gap-2 items-center'>
                                        <Scaling strokeWidth={"1.5px"} />
                                        Size
                                   </div>
                              </AccordionTrigger>
                              <AccordionContent>
                                   <RadioGroup>
                                        <div className="flex items-center space-x-2">
                                             <RadioGroupItem value="2-module" id="r1" />
                                             <Label htmlFor="r1">2 Module</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                             <RadioGroupItem value="4-module" id="r2" />
                                             <Label htmlFor="r2">4 Module</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                             <RadioGroupItem value="6-module" id="r3" />
                                             <Label htmlFor="r3">6 Module</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                             <RadioGroupItem value="8-module" id="r4" />
                                             <Label htmlFor="r4">8 Module</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                             <RadioGroupItem value="12-module" id="r5" />
                                             <Label htmlFor="r5">12 Module</Label>
                                        </div>
                                   </RadioGroup>
                              </AccordionContent>
                         </AccordionItem>
                         <AccordionItem value="item-3">
                              <AccordionTrigger>
                                   <div className='flex gap-2 items-center'>
                                        <SwatchBook strokeWidth={"1.5px"} />
                                        Accessories
                                   </div>
                              </AccordionTrigger>
                              <AccordionContent>
                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloribus eligendi id voluptates qui soluta, voluptatum omnis facilis expedita animi temporibus ex, debitis ad similique? Eaque nam maiores repudiandae officia!</p>
                              </AccordionContent>
                         </AccordionItem>
                         <AccordionItem value="item-4">
                              <AccordionTrigger>
                                   <div className='flex gap-2 items-center'>
                                        <SunMedium strokeWidth={"1.5px"} />
                                        Icons
                                   </div>
                              </AccordionTrigger>
                              <AccordionContent>
                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloribus eligendi id voluptates qui soluta, voluptatum omnis facilis expedita animi temporibus ex, debitis ad similique? Eaque nam maiores repudiandae officia!</p>
                              </AccordionContent>
                         </AccordionItem>
                         <AccordionItem value="item-5">
                              <AccordionTrigger>
                                   <div className='flex gap-2 items-center'>
                                        <RectangleHorizontal fill='white' strokeWidth={"1.5px"} />
                                        Color
                                   </div>
                              </AccordionTrigger>
                              <AccordionContent>
                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloribus eligendi id voluptates qui soluta, voluptatum omnis facilis expedita animi temporibus ex, debitis ad similique? Eaque nam maiores repudiandae officia!</p>
                              </AccordionContent>
                         </AccordionItem>
                         <AccordionItem value="item-6">
                              <AccordionTrigger>
                                   <div className='flex gap-2 items-center'>
                                        <RectangleHorizontal strokeWidth={"1.5px"} />
                                        Frame
                                   </div>
                              </AccordionTrigger>
                              <AccordionContent>
                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, doloribus eligendi id voluptates qui soluta, voluptatum omnis facilis expedita animi temporibus ex, debitis ad similique? Eaque nam maiores repudiandae officia!</p>
                              </AccordionContent>
                         </AccordionItem>
                    </Accordion>
               </nav>
          </aside>
     )
}

export default Sidebar