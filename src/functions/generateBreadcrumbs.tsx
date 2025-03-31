import {BreadcrumbItem, BreadcrumbSeparator} from "@/components/ui/breadcrumb";
import {Link} from "react-router-dom";
import React from "react";

function generateBreadcrumbs(pathname:string) {
    const paths = pathname.split('/').filter(Boolean);

    return paths.map((path, index) => {
        const href = `/${paths.slice(0, index + 1).join('/')}`;
        const label = path.charAt(0).toUpperCase() + path.slice(1); // Capitalize first letter

        return (
            <React.Fragment key={index}>
                <BreadcrumbItem className="hidden md:block">
                    <Link to={href}>{label}</Link>
                </BreadcrumbItem>
                {index < paths.length - 1 && <BreadcrumbSeparator className="hidden md:block" />}
            </React.Fragment>
        );
    });
}

export default generateBreadcrumbs;