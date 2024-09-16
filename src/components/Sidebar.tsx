import React from 'react'
import {
     Accordion,
     AccordionContent,
     AccordionItem,
     AccordionTrigger,
} from "~/components/ui/accordion"

function Sidebar() {
     return (
          <aside className="hidden w-64 shrink-0 border-r bg-card lg:block">
               <nav className="space-y-1 px-4">
                    {/* <ul className="flex flex-col space-y-1 px-4"> */}
                         <Accordion type="single" collapsible className="w-full">
                              <AccordionItem value="item-1">
                                   <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                   <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                   </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="item-2">
                                   <AccordionTrigger>Is it styled?</AccordionTrigger>
                                   <AccordionContent>
                                        Yes. It comes with default styles that matches the other
                                        components&apos; aesthetic.
                                   </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="item-3">
                                   <AccordionTrigger>Is it animated?</AccordionTrigger>
                                   <AccordionContent>
                                        Yes. It&apos;s animated by default, but you can disable it if you
                                        prefer.
                                   </AccordionContent>
                              </AccordionItem>
                         </Accordion>
                    {/* </ul> */}
               </nav>
          </aside>
     )
}

export default Sidebar


function ArrowRightIcon(props: any) {
     return (
          <svg
               {...props}
               xmlns="http://www.w3.org/2000/svg"
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
          >
               <path d="M5 12h14" />
               <path d="m12 5 7 7-7 7" />
          </svg>
     )
}