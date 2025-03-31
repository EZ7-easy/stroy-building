import { Button } from "@/components/ui/button"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"
import Image from "next/image"

export function StoriesCarousel() {
	const stories = [
		{
			title: "Yard of the Week: Resort-Like Feel With Mediterranean Touches",
			category: "Popular",
			image: "/homePage/stories.webp" // replace with your image
		},
		{
			title: "10 Ways to Control the Cost of Your Bathroom Remodel",
			category: "Popular",
			image: "/homePage/stories.webp" // replace with your image
		},
		{
			title: "Which Window Treatment Should You Choose?",
			category: "Popular",
			image: "/homePage/stories.webp" // replace with your image
		},
		{
			title: "7 Stylish New Kitchens With Charming Country Details",
			category: "Popular",
			image: "/homePage/stories.webp" // replace with your image
		},
		{
			title: "Yard of the Week: Resort-Like Feel With Mediterranean Touches",
			category: "Popular",
			image: "/homePage/stories.webp" // replace with your image
		},
		{
			title: "10 Ways to Control the Cost of Your Bathroom Remodel",
			category: "Popular",
			image: "/homePage/stories.webp" // replace with your image
		},
		{
			title: "Which Window Treatment Should You Choose?",
			category: "Popular",
			image: "/homePage/stories.webp" // replace with your image
		},
		{
			title: "7 Stylish New Kitchens With Charming Country Details",
			category: "Popular",
			image: "/homePage/stories.webp" // replace with your image
		}
	]
	
	return (
		<div className="max-w-7xl mx-auto px-4 py-12">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-2xl md:text-3xl font-bold">Latest Stories</h1>
				<Button variant="ghost" className="hidden sm:flex gap-1" asChild>
					<Link href="#">
						See All
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="m9 18 6-6-6-6"/>
						</svg>
					</Link>
				</Button>
			</div>
			
			<Carousel
				opts={{
					align: "start",
					slidesToScroll: "auto",
				}}
				className="w-full"
			>
				<CarouselContent>
					{stories.map((story, index) => (
						<CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
							<Link href="#" className="group block">
								<div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3">
									<Image
										src={story.image}
										alt={story.title}
										fill
										className="object-cover transition-transform group-hover:scale-105"
									/>
									<div className="absolute top-3 left-3 bg-background px-2 py-1 rounded-md text-sm font-medium">
										{story.category}
									</div>
								</div>
								<h3 className="font-medium text-lg group-hover:text-primary transition-colors">
									{story.title}
								</h3>
							</Link>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="left-2" />
				<CarouselNext className="right-2" />
			</Carousel>
			
			<Button variant="ghost" className="w-full mt-6 sm:hidden gap-1" asChild>
				<Link href="#">
					See All Stories
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<path d="m9 18 6-6-6-6"/>
					</svg>
				</Link>
			</Button>
		</div>
	)
}
