import Link from "next/link"

export function Footer() {
	return (
		<footer className="bg-background border-t">
			<div className="container mx-auto px-4 py-12">
				{/* Top Section */}
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
					<div>
						<h1 className="text-2xl font-bold mb-1">houzz</h1>
					</div>
				</div>
				
				{/* Main Links */}
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
					{/* COMPANY */}
					<div>
						<h3 className="font-medium mb-4">COMPANY</h3>
						<ul className="space-y-3">
							{['About Houzz', 'Careers', 'Privacy & Notice', 'Terms', 'Cookie Policy', 'Mobile Apps', 'Copyright & Trademark'].map((item) => (
								<li key={item}>
									<Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>
					
					{/* BUSINESS SERVICES */}
					<div>
						<h3 className="font-medium mb-4">BUSINESS SERVICES</h3>
						<ul className="space-y-3">
							{['For Professionals', 'Houzz vs. Houzz Pro', 'Houzz Pro vs. Ivy', 'Houzz Pro Advertising Reviews',
								'Houzz Pro 3D Floor Planner Reviews', 'For Brands', 'Trade Program', 'Buttons & Badges'].map((item) => (
								<li key={item}>
									<Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>
					
					{/* GET HELP */}
					<div>
						<h3 className="font-medium mb-4">GET HELP</h3>
						<ul className="space-y-3">
							{['Your Orders', 'Shipping & Delivery', 'Return Policy', 'Houzz Canada',
								'Review Professionals', 'Suggested Professionals', 'Accessibility',
								'Houzz Support', 'Contact'].map((item) => (
								<li key={item}>
									<Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>
					
					{/* CONNECT WITH US */}
					<div>
						<h3 className="font-medium mb-4">CONNECT WITH US</h3>
						<ul className="space-y-3">
							{['Houzz Blog', 'Twitter', 'Facebook', 'YouTube', 'RSS'].map((item) => (
								<li key={item}>
									<Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				
				{/* Divider */}
				<div className="border-t my-6" />
				
				{/* Bottom Section */}
				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-sm text-muted-foreground">© 2025 Houzz Inc.</p>
					
					<div className="flex items-center gap-4">
						<Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
							Accessibility
						</Link>
						<Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
							Terms
						</Link>
						<Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
							Privacy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
