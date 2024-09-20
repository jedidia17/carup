import { Outlet } from "react-router-dom";
import Logo from "./logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CarTaxiFront, LayoutDashboardIcon, Bell, User2Icon } from 'lucide-react';
import { NavLink } from 'react-router-dom';


export default function ProctedLayout() {
    return (
        <div className="flex relative">
            <nav class="bg-background h-screen top-0 left-0 min-w-[250px] py-6 overflow-auto border-r border-border">
                <div class="relative flex flex-col h-full">
                    <div className="ml-8">
                        <Logo />
                    </div>

                    <ul class="space-y-3 my-8 flex-1">
                        <li>
                            <NavLink to="/dashboard/"
                                className="text-sm flex items-center text-ring border-r-[5px] border-primary bg-secondary px-8 py-4 transition-all">
                                <LayoutDashboardIcon fill="currentColor" className="w-[18px] h-[18px] mr-4" />
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/manage"
                                className="text-foreground text-sm flex items-center hover:text-ring hover:border-r-[5px] border-ring hover:bg-secondary px-8 py-4 transition-all">
                                <CarTaxiFront fill="currentColor" className="w-[18px] h-[18px] mr-4" />
                                <span>Mes voitures</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/notifications"
                                className="text-foreground text-sm flex items-center hover:text-primary hover:border-r-[5px] border-primary hover:bg-secondary px-8 py-4 transition-all">
                                <Bell fill="currentColor" className="w-[18px] h-[18px] mr-4" />
                                <span>Notifications</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/profile"
                                className="text-foreground text-sm flex items-center hover:text-primary hover:border-r-[5px] border-primary hover:bg-secondary px-8 py-4 transition-all">
                                <User2Icon fill="currentColor" className="w-[18px] h-[18px] mr-4" />
                                <span>Profile</span>
                            </NavLink>
                        </li>
                    </ul>

                    <div class="flex flex-wrap items-center cursor-pointer border-t border-border px-4 py-4">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>JK</AvatarFallback>
                        </Avatar>
                        <div class="ml-4">
                            <p class="text-sm text-foreground">My Acount</p>
                            <p class="text-xs text-secondary-foreground mt-0.5">Active free account</p>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex-1 left-[250px] bg-background">
                <Outlet />
            </div>
        </div>
    );
}