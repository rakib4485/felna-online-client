import React from 'react';

const ContactHeader = () => {
    return (
        <header class="page-header">
				<div class="container"> <span class="ltx-before"></span>
					<h1 class="header ltx-check-scroll ltx-glitch" data-text="Contact Us">Contact Us</h1>
					<ul class="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">
						<li class="home"><span property="itemListElement" typeof="ListItem"><a property="item"
									typeof="WebPage" title="Go to Home." href="../index.html" class="home"><span
										property="name">Home</span></a>
								<meta property="position" content="1"/>
							</span></li>
						<li class="post post-page current-item"><span property="itemListElement" typeof="ListItem"><span
									property="name">Contact Us</span>
								<meta property="position" content="2"/>
							</span></li>
					</ul> <span class="ltx-after"></span>
					<div class="ltx-header-icon"></div>
				</div>
			</header>
    );
};

export default ContactHeader;