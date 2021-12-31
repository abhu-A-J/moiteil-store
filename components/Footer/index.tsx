import Image from 'next/image';

/* Styles */
import {
	FooterLayout,
	FooterGrid,
	FooterGridItem,
	FooterLinkItem,
	FooterGridItemTitle,
	FooterGridItemList,
	SocialMediaGrid
} from './index.styles';

/* Components */
import ContentLayout from '../Layout/ContentLayout';
import InternalLink from '../InternalLink';
import ExternalLink from '../ExternalLink';

/* Assets */
import moiteilLogo from '../../public/moiteil-logo.png';
import githubIcon from '../../public/github-icon.svg';
import linkedInIcon from '../../public/linkedIn-icon.svg';
import twitterIcon from '../../public/twitter-icon.svg';

const Footer = () => {
	return (
		<FooterLayout style={{ marginTop: '20px' }}>
			<ContentLayout styles={{ padding: '3rem 0rem' }}>
				<FooterGrid>
					{/* Company Details */}
					<FooterGridItem>
						<Image src={moiteilLogo} />
						<p>Easily buy eco-freindly and best quality print-on-demand products in minutes with Moiteil.</p>
						<SocialMediaGrid>
							{/* Github Profile */}
							<ExternalLink href={process.env.NEXT_PUBLIC_GITHUB_LINK}>
								<Image src={githubIcon} width={16} height={16} />
							</ExternalLink>

							{/* Twitter Profile */}
							<ExternalLink href={process.env.NEXT_PUBLIC_TWITTER_LINK}>
								<Image src={twitterIcon} width={16} height={16} />
							</ExternalLink>

							{/* Linkedin Profile */}
							<ExternalLink href={process.env.NEXT_PUBLIC_LINKEDIN_LINK}>
								<Image src={linkedInIcon} width={16} height={16} />
							</ExternalLink>
						</SocialMediaGrid>
					</FooterGridItem>

					{/* Navigation Lists */}
					<FooterGridItem>
						{/* Title */}
						<FooterGridItemTitle>Navigation</FooterGridItemTitle>
						{/* List Items */}
						<FooterGridItemList>
							<FooterLinkItem>
								<InternalLink href="/about">About Us</InternalLink>
							</FooterLinkItem>

							<FooterLinkItem>
								<InternalLink href="/categoty/clothing">Clothing</InternalLink>
							</FooterLinkItem>

							<FooterLinkItem>
								<InternalLink href="/category/home-and-living">Home And Living</InternalLink>
							</FooterLinkItem>

							<FooterLinkItem>
								<InternalLink href="/category/gifts">Gifts</InternalLink>
							</FooterLinkItem>

							<FooterLinkItem>
								<InternalLink href="/category/accessories">Accessories</InternalLink>
							</FooterLinkItem>
						</FooterGridItemList>
					</FooterGridItem>

					{/* Resources Details */}
					<FooterGridItem>
						{/* Title */}
						<FooterGridItemTitle>Resources</FooterGridItemTitle>
						{/* List Items */}
						<FooterGridItemList>
							<FooterLinkItem>
								<ExternalLink href="https://nextjs.org/docs/getting-started" target="_blank">
									Next.js
								</ExternalLink>
							</FooterLinkItem>

							<FooterLinkItem>
								<ExternalLink href="https://stitches.dev/">Stitches</ExternalLink>
							</FooterLinkItem>

							<FooterLinkItem>
								<ExternalLink href="https://www.radix-ui.com/">Radix UI</ExternalLink>
							</FooterLinkItem>
						</FooterGridItemList>
					</FooterGridItem>

					{/* Contact Details */}
					<FooterGridItem>
						{/* Title */}
						<FooterGridItemTitle>Contact</FooterGridItemTitle>
						{/* List Items */}
						<FooterGridItemList>
							<FooterLinkItem>
								<p>3880 Braxton Street Chicago, il 60606 United States</p>
							</FooterLinkItem>

							<FooterLinkItem>
								<ExternalLink href="mailto:moiteil.com?subject='You have an email'">support@moiteil.com</ExternalLink>
							</FooterLinkItem>

							<FooterLinkItem>
								<ExternalLink href="tel:815-000-0000">815-000-0000</ExternalLink>
							</FooterLinkItem>
						</FooterGridItemList>
					</FooterGridItem>
				</FooterGrid>
			</ContentLayout>
		</FooterLayout>
	);
};

export default Footer;
