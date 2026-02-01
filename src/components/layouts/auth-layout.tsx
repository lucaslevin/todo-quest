import { AppSidebar } from '@/components/app-sidebar';

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

export function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="[--header-height:calc(--spacing(14))]">
			<SidebarProvider className="flex flex-col">
				<header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur-md">
					<div className="flex h-(--header-height) w-full items-center gap-2 px-4"></div>
				</header>

				<div className="flex flex-1 pt-(--header-height)">
					<AppSidebar collapsible="icon" />
					<SidebarInset>{children}</SidebarInset>
				</div>
			</SidebarProvider>
		</div>
	);
}
