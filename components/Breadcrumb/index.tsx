import Image from 'next/image';
/* Styling */
import { BreadcrumbItem, BreadcrumbRoot } from './index.styles';

/* Components */
import InternalLink from '../InternalLink';

/* Asset */
import homeIcon from '../../public/home-icon.svg';

/* Types */
import type { StitchesCSS, StitchesGenericVariantsProps } from '../../stitches.config';

type BreadcrumbItemProp = {
	href: string;
	label: string;
} & StitchesGenericVariantsProps<typeof BreadcrumbItem>;

type Props = {
	currentPath: BreadcrumbItemProp[];
} & { style?: StitchesCSS };

function Breadcrumb(props: Props) {
	const { currentPath, style } = props;

	return (
		<BreadcrumbRoot css={style}>
			<BreadcrumbItem>
				<InternalLink href="/">
					<Image src={homeIcon} />
				</InternalLink>
			</BreadcrumbItem>

			{currentPath.map((item) => {
				return item.isDisabled ? (
					<BreadcrumbItem key={item.href} isActive={item.isActive} isDisabled>
						<p>\ {item.label}</p>
					</BreadcrumbItem>
				) : (
					<BreadcrumbItem key={item.href} isActive={item.isActive}>
						<InternalLink href={item.href}>
							<>\ {item.label}</>
						</InternalLink>
					</BreadcrumbItem>
				);
			})}
		</BreadcrumbRoot>
	);
}

export default Breadcrumb;

Breadcrumb.defaultProps = {
	style: {}
};
