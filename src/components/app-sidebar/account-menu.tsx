import { notionistsNeutral } from '@dicebear/collection';
import { createAvatar } from '@dicebear/core';
import { BellIcon, CaretUpDownIcon, CreditCardIcon, SparkleIcon, UserCircleIcon, XCircleIcon } from '@phosphor-icons/react';
import { useLocation } from 'wouter';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar';
import { authClient } from '@/lib/auth-client';
import { Progress } from '../ui/progress';

export function AccountMenu() {
	const [, setLocation] = useLocation();
	const { isMobile } = useSidebar();

	const { data } = authClient.useSession();

	const username = data?.user.username || 'Unknown';
	const level = 12;

	const avatar = createAvatar(notionistsNeutral, { seed: username }).toDataUri();

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
							<Avatar>
								<AvatarImage src={avatar} className="rounded-md" />
							</Avatar>

							<div className="flex flex-1 flex-col gap-1 text-left">
								<div className="flex items-center justify-between">
									<span className="truncate text-sm font-medium">{username}</span>
									<span className="text-xs text-muted-foreground">Lv. {level}</span>
								</div>

								<Progress value={33} className="bg-border" />
							</div>

							<CaretUpDownIcon className="ml-2 size-4 shrink-0 opacity-60" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg" side={isMobile ? 'bottom' : 'right'} align="end" sideOffset={4}>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<Avatar>
									<AvatarImage src={avatar} className="rounded-md" />
								</Avatar>

								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate text-sm font-medium">{username}</span>
									<span className="text-xs text-muted-foreground">Lv. {level}</span>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<SparkleIcon />
								Upgrade to Pro
							</DropdownMenuItem>
						</DropdownMenuGroup>

						<DropdownMenuSeparator />

						<DropdownMenuGroup>
							<DropdownMenuItem>
								<UserCircleIcon />
								Account
							</DropdownMenuItem>

							<DropdownMenuItem>
								<CreditCardIcon />
								Billing
							</DropdownMenuItem>

							<DropdownMenuItem>
								<BellIcon />
								Notifications
							</DropdownMenuItem>
						</DropdownMenuGroup>

						<DropdownMenuSeparator />

						<DropdownMenuItem variant="destructive" onClick={async () => await authClient.signOut({ fetchOptions: { onSuccess: () => setLocation('/') } })}>
							<XCircleIcon />
							Log out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
