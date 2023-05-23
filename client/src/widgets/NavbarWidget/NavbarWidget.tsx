import "./NavbarWidget.scss";

import * as React from 'react';

import { NavbarWidget } from '../../constants';

export interface INavbarWidgetProps {
 }
 
 export function NavbarsWidget (props: INavbarWidgetProps) {
   return (
     <>
       {NavbarWidget.map((nav, key) => {
         return (
           <a
             key={key}
             href={nav.route}
             className={nav.id === 1 ? "nav_items isActive" : "nav_items"}
           >
             {nav.name}{" "}
           </a>
         );
       })}
     </>
   );
 }
 