import React from 'react';
import {useLocation} from "react-router-dom";

export const AboutUs = () => {
    const location = useLocation()
    return (
        <div className="flex">
            <h1>What is an About Us page?</h1>
            <p>
                An About Us page is a section on a website that provides information about a
                company, organization, or individual. It is an opportunity to tell your brand’s story,
                share your vision, history, values, and achievements, and introduce team members. This is
                where you build trust and credibility with customers.
            </p>
            <p>
                In Shopify’s customer trust research, we found shoppers navigate to an About Us page to learn
                more about the brand and the people behind the products. Your About Page should address
                those two curiosities shoppers have to help them with decision making.
            </p>
            <p>
                Shoppers are also interested in a company’s mission. They’ll use the About Us page to determine
                if they share core values with the business and to decide if they want to shop with you or not.
            </p>

            <h2>Components of an About Us page</h2>
            <p>
                In contrast to a landing page, your About Us page should focus more on your
                brand identity and less on sales. Here are some components to include:
            </p>
            <ul>
                <li><b>Your brand story.</b> Tell shoppers the origin story of your business and why you started it.
                    For the most impact, make it memorable and personal, so customers relate and connect with your brand.
                </li>
                <li><b>Who you serve.</b>What do you offer and who is it for? Help shoppers see the value of your
                    product or service by sharing how it solves problems or needs.
                </li>
                <li><b>How you operate.</b> If you offer a service, explain your business model or how your products
                    are made. If you have a unique way of doing things, show it. This builds credibility with
                    shoppers and helps you stand out against competitors.
                </li>
                <li><b>The face of your business.</b>Feature photos of the founders or key people on your team.
                    Customers like to see who they are buying from or working with.
                </li>
                <li><b>Persuasive content.</b> Consider what step you’d like readers to take next. Use additional
                    content and calls to action to move them forward towards that goal. This could include buttons,
                    testimonials, an explainer video, data visualizations, links to blog posts, products, your social
                    media accounts or newsletter.
                </li>
            </ul>

              </div>
    );
};

