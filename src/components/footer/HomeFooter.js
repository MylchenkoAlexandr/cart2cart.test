import React from "react";
import Section from "../section";
import {map, reject, isNil} from "lodash";

const bootstrap = (header="", data=[]) => {
    const items = reject(map(data, ({ title="", url="", children=null }, key ) => {

        let item ;
        if( url ) {
            item = <a href={ url }>{ title }</a>
        } else if( title ) {
            item = <p>{ title }</p>
        }

        return (
            <li key={ key }>
                { item }
                { children }
            </li>
        )
    }), isNil ) ;
    return (
        <div className="column">
            <h3>{ header }</h3>
            <ul>{ items }</ul>
        </div>
    )
}

export default function HomeFooter() {
    return (
        <Section className="HomeFooter">
            { bootstrap("INFORMATION", [
                { title: "FAQ", url: "/" },
                { title: "Quick Demo Tour", url: "/" },
                { title: "Provided Services", url: "/" },
                { title: "Blog", url: "/" },
                { title: "Terms of Service", url: "/" },
                { title: "Service Level Agreement", url: "/" },
                { title: "Privacy Policy", url: "/" },
                { title: "Sitemap", url: "/" },
            ]) }
            { bootstrap("SUPPORT CENTER", [
                { title: "Submit a Ticket", url: "/" },
                { title: "Support Packages", url: "/" },
                { title: "Submit a Feature", url: "/" },
                { title: "Complaint Form", url: "/" },
                { title: "Video Tutorials", url: "/" },
                { title: "Slideshow Tutorials", url: "/" },
                { title: "Release Notes", url: "/" },
                { title: "Contact Us", url: "/" },
            ]) }
            { bootstrap("FOR PARTNER", [
                { title: "Become a Partner", url: "/" },
                { title: "Migration Partners", url: "/" },
                { title: "Cart2Cart Press Kit", url: "/" },
                { title: "eCommerce API", url: "/" },
            ]) }
            { bootstrap("CONNECT WITH US", [
                { children: (
                        <div className="social">
                            <a href="/" className="fa-icon facebook"/>
                            <a href="/" className="fa-icon twitter"/>
                            <a href="/" className="fa-icon youtube"/>
                        </div>
                    )},
                { title: <>Toll-Free<span className="phone">1-800-224-1462</span></> },
                { title: <span className="mail">contact@shopping-cart-migration.com</span> },
            ]) }
        </Section>
    );
}
