'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { about, getIdeas } from '@/constants'
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { BriefcaseBusiness, ChevronDown,  Menu, User,   } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
	return (
		<div className={'px-[3%] flex justify-between top-0 w-full bg-white h-16 items-center sticky z-50 shadow-md'}>
			<div className={'flex'}>
				<div className={'hidden max-lg:flex'}>
					<Sheet>
						<SheetTrigger>
							<Menu className={'mr-3 mt-1 text-md'} size={20}/>
						</SheetTrigger>
						<SheetContent side={'left'} className={'overflow-y-auto overflow-x-hidden'}>
							
							<Link href={'/'} className={'flex cursor-pointer text-xl font-medium'}>
								Home
							</Link>
							<Separator className={'my-2'} />
							
							<Accordion type='single' collapsible className='w-full'>
								
								<AccordionItem value='item-1'>
									<AccordionTrigger className={'flex text-lg'}>
										Get Ideas
									</AccordionTrigger>
									<AccordionContent>
										{getIdeas.map((idea) => (
											<div key={idea.category} className={'text-[15px] font-medium mb-3'}>
												{idea.category}
												{idea.items.map((item) => (
													<div key={item} className={'cursor-pointer text-md font-normal py-[2px]'}>{item}</div>
												))}
											</div>
										))}
									</AccordionContent>
								</AccordionItem>
								
								<AccordionItem value='item-2'>
									<AccordionTrigger className={'flex text-lg'}>
										Find Professionals
									</AccordionTrigger>
									<AccordionContent>
										{getIdeas.map((idea) => (
											<div key={idea.category} className={'text-[15px] font-medium mb-3'}>
												{idea.category}
												{idea.items.map((item) => (
													<div key={item} className={'cursor-pointer text-md font-normal py-[2px]'}>{item}</div>
												))}
											</div>
										))}
									</AccordionContent>
								</AccordionItem>
								
								<AccordionItem value='item-3'>
									<AccordionTrigger className={'flex text-lg'}>
										Join as a Pro
									</AccordionTrigger>
									<AccordionContent>
										{getIdeas.map((idea) => (
											<div key={idea.category} className={'text-[15px] font-medium mb-3'}>
												{idea.category}
												{idea.items.map((item) => (
													<div key={item} className={'cursor-pointer text-md font-normal py-[2px]'}>{item}</div>
												))}
											</div>
										))}
									</AccordionContent>
								</AccordionItem>
							</Accordion>
							<h1 className={'w-[110%] bg-[#eeeeee] text-lg mt-8'}>About</h1>
							<Accordion type='single' collapsible className='w-full'>
								
								<AccordionItem value='item-4'>
									<AccordionTrigger className={'flex text-lg'}>
										Company
									</AccordionTrigger>
									<AccordionContent>
										{about.map((item) => (
											<div key={item.name} className={'cursor-pointer py-1'}>{item.name}</div>
										))}
									</AccordionContent>
								</AccordionItem>
								
								<AccordionItem value='item-5'>
									<AccordionTrigger className={'flex text-lg'}>
										Business Services
									</AccordionTrigger>
									<AccordionContent>
										{about.map((item) => (
											<div key={item.name} className={'cursor-pointer py-1'}>{item.name}</div>
										))}
									</AccordionContent>
								</AccordionItem>
								
								<AccordionItem value='item-6'>
									<AccordionTrigger className={'flex text-lg'}>
										Get Help
									</AccordionTrigger>
									<AccordionContent>
										{about.map((item) => (
											<div key={item.name} className={'cursor-pointer py-1'}>{item.name}</div>
										))}
									</AccordionContent>
								</AccordionItem>
								
								<AccordionItem value='item-7'>
									<AccordionTrigger className={'flex text-lg'}>
										Connect with US
									</AccordionTrigger>
									<AccordionContent>
										{about.map((item) => (
											<div key={item.name} className={'cursor-pointer py-1'}>{item.name}</div>
										))}
									</AccordionContent>
								</AccordionItem>
							</Accordion>
							
							<h1 className={'w-[110%] bg-[#eeeeee] text-lg mt-8'}>Privacy & Legal</h1>
							<div className={'font-medium  text-lg mt-4 space-y-4 cursor-pointer'}>
								<h1>Privacy and Notice</h1>
								<h1>Terms</h1>
								<h1>Cookie Policy</h1>
								<h1>Copyright & Trademark</h1>
							</div>
						
						
						</SheetContent>
					</Sheet>
				</div>
				
				<h1 className={'text-3xl max-sm:text-2xl font-bold mr-10'}>LOGO</h1>
				
				<div className={'hidden lg:flex '}>
					<HoverCard>
						<HoverCardTrigger className={'flex text-lg mt-1 mr-5 cursor-pointer'}>
							Get Ideas
							<ChevronDown className={'ml-1 mt-1'} />
						</HoverCardTrigger>
						<HoverCardContent className={'grid grid-cols-5 w-full space-y-[-5px]'}>
							{getIdeas.map((idea) => {
								return (
									<div key={idea.category} className={'pr-5 pb-2'}>
										<h2 className={'text-sm font-bold'}>{idea.category}</h2>
										{idea.items.map((item) => {
											return (
												<div key={item} className={'cursor-pointer text-sm py-[2px]'}>{item}</div>
											)
										})}
									</div>
								)
							})}
						</HoverCardContent>
					</HoverCard>
					
					
					{/* 	Find Professionals */}
					<HoverCard>
						<HoverCardTrigger className={'flex text-lg mt-1 cursor-pointer'}>
							Find Professionals
							<ChevronDown className={'ml-1 mt-1'} />
						</HoverCardTrigger>
						<HoverCardContent className={'grid grid-cols-5 w-full space-y-[-5px]'}>
							{getIdeas.map((idea) => {
								return (
									<div key={idea.category} className={'pr-5 pb-2'}>
										<h2 className={'text-sm font-bold'}>{idea.category}</h2>
										{idea.items.map((item) => {
											return (
												<div key={item} className={'cursor-pointer text-sm py-[2px]'}>{item}</div>
											)
										})}
									</div>
								)
							})}
						</HoverCardContent>
					</HoverCard>
				</div>
			</div>
			
			<div className={'flex space-x-4'}>
				<Link href={'/signin'} className={'flex space-x-4  text-lg mt-1 max-sm:text-md'}>
					<User/>
					<h1 className={'max-sm:hidden pl-[-2px]'}>Sign In</h1>
				</Link>
				<Button variant={'ghost'} className={'sm:text-lg max-sm:text-md border-2 border-black rounded-sm flex'}>
					<BriefcaseBusiness />
					Join as a Pro
				</Button>
			</div>
		</div>
	)
}
export default Navbar
