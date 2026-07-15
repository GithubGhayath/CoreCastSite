import { siteConfig } from "@/lib/data";

export default function ContactInfo() {
    return(
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-fg-muted">
                <a
                    href="https://maps.app.goo.gl/e2vKPWwcbjdW93i47"
                    target="_blank"
                    rel="noopener noreferrer">
                  {siteConfig.address}
                </a>
                <br />
                  <a href="https://wa.me/963987760200" target="_blank" rel="noopener noreferrer">
                     {siteConfig.phone1}
                  </a>
                <br />
                 <a href="https://wa.me/963987760201" target="_blank" rel="noopener noreferrer">
                    {siteConfig.phone2}
                 </a>
            </p>
    );
}