/**
 * WordPress dependencies
 */
import {
	SVG,
	Path,
	G,
} from '@wordpress/components';

/**
 * Block user interface icons
 */
const icons = {};

icons.thumbnails = <SVG fill="none" height="48" viewBox="0 0 49 48" width="49" xmlns="http://www.w3.org/2000/SVG"><G stroke="currentColor"><G fill="currentColor"><Path d="m17.319 31.2656h-2.638c-.0999 0-.181.0811-.181.1811v2.6379c0 .1.0811.181.181.181h2.638c.0999 0 .181-.081.181-.181v-2.6379c0-.1-.0811-.1811-.181-.1811z" /><Path d="m22.3268 31.2656h-2.638c-.0999 0-.181.0811-.181.1811v2.6379c0 .1.0811.181.181.181h2.638c.1 0 .181-.081.181-.181v-2.6379c0-.1-.081-.1811-.181-.1811z" /><Path d="m27.319 31.2656h-2.638c-.0999 0-.181.0811-.181.1811v2.6379c0 .1.0811.181.181.181h2.638c.0999 0 .181-.081.181-.181v-2.6379c0-.1-.0811-.1811-.181-.1811z" /></G><Path d="m33.6606 14.4844h-17.6962c-.6707 0-1.2144.3917-1.2144.875v12.75c0 .4832.5437.875 1.2144.875h17.6962c.6707 0 1.2144-.3918 1.2144-.875v-12.75c0-.4833-.5437-.875-1.2144-.875z" strokeWidth="1.5" fill="none" /><Path d="m15.1218 25.1989 5.3752-3.5884 4.5693 2.5772 4.7645-4.3127 5.0442 4.3127" strokeLinejoin="round" strokeWidth="1.5" fill="none" /></G></SVG>;
icons.fullAutoplay = <SVG fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/SVG"><Path d="m33.1606 14.4844h-17.6962c-.6707 0-1.2144.3917-1.2144.875v12.75c0 .4832.5437.875 1.2144.875h17.6962c.6707 0 1.2144-.3918 1.2144-.875v-12.75c0-.4833-.5437-.875-1.2144-.875z" stroke="currentColor" strokeWidth="1.5" fill="none" /><G fill="currentColor"><Path d="m27.9817 21.598c.0004.1797-.0449.3566-.1317.5139-.0868.1574-.2122.2901-.3645.3856l-4.9876 3.151c-.1462.0917-.3143.1426-.4868.1474s-.3432-.0368-.4943-.1203c-.151-.0835-.2769-.206-.3646-.3546-.0877-.1487-.134-.3181-.134-.4907v-6.1772c0-.2601.1033-.5096.2872-.6935s.4334-.2872.6935-.2872c.1654.0012.3276.0463.47.1305l4.9702 2.8783c.1634.0912.2997.2242.395.3852.0953.1611.1462.3445.1476.5316z" /><Path d="m38 27.7344c-.8284 0-1.5-.6716-1.5-1.5v-9c0-.8285.6716-1.5 1.5-1.5z" /><Path d="m10.5 15.7344c.8284 0 1.5.6715 1.5 1.5v9c0 .8284-.6716 1.5-1.5 1.5z" /></G></SVG>;
icons.fullScroll = <SVG fill="none" height="48" viewBox="0 0 49 48" width="49" xmlns="http://www.w3.org/2000/SVG"><G fill="currentColor"><Path d="m28.6647 23.5531c-.3175 0-.6025.1399-.7976.3611-.1952-.2212-.4802-.3611-.7976-.3611-.2191 0-.4222.0665-.5913.1803-.1457-.4143-.5408-.712-1.0039-.712-.1936 0-.3754.0521-.5318.143v-3.0676c0-.5865-.4769-1.0635-1.0635-1.0635-.5865 0-1.0634.477-1.0634 1.0635v4.5171l-1.3751-1.0401c-.402-.402-1.1028-.4025-1.5038 0-.4147.4143-.4147 1.0896-.0053 1.4985l3.7546 3.98c.05.0538.1197.0841.193.0841h4.5198c.1218 0 .2281-.083.2579-.2016l1.0635-4.2539c.0053-.0207.008-.0425.008-.0643 0-.5865-.477-1.0635-1.0635-1.0635z" /><Path d="m26.0888 19.7099h2.5097l-.7583.7583c-.129.129-.129.3387 0 .4678.0642.0648.1489.0972.2336.0972s.1694-.0324.2342-.0966l1.3234-1.3227c.0304-.0311.0549-.0681.0715-.1078.0337-.0814.0337-.1721 0-.2534-.0166-.0404-.0411-.0768-.0715-.1079l-1.3234-1.3227c-.129-.129-.3387-.129-.4678 0-.129.129-.129.3388 0 .4678l.7583.7583h-2.5097c-.1826 0-.3309.1482-.3309.3308 0 .1827.1483.3309.3309.3309z" /><Path d="m21.577 19.0487h-2.5098l.7583-.7583c.129-.129.129-.3388 0-.4678-.0642-.0648-.1489-.0973-.2336-.0973s-.1694.0325-.2342.0966l-1.3234 1.3228c-.0305.0311-.055.0681-.0715.1078-.0337.0814-.0337.1721 0 .2535.0165.0403.041.0767.0715.1078l1.3234 1.3228c.129.129.3387.129.4678 0 .129-.1291.129-.3388 0-.4679l-.7583-.7583h2.5098c.1826 0 .3308-.1482.3308-.3308s-.1482-.3309-.3308-.3309z" /></G><Path d="m33.6606 14.4844h-17.6962c-.6707 0-1.2144.3917-1.2144.875v12.75c0 .4832.5437.875 1.2144.875h17.6962c.6707 0 1.2144-.3918 1.2144-.875v-12.75c0-.4833-.5437-.875-1.2144-.875z" stroke="currentColor" strokeWidth="1.5" fill="none" /><Path d="m38.5 27.7344c-.8284 0-1.5-.6716-1.5-1.5v-9c0-.8285.6716-1.5 1.5-1.5z" fill="currentColor" /><Path d="m11 15.7344c.8284 0 1.5.6715 1.5 1.5v9c0 .8284-.6716 1.5-1.5 1.5z" fill="currentColor" /></SVG>;
icons.lightbox = <SVG fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/SVG"><G fill="currentColor"><Path clipRule="evenodd" d="m28.6679 24.9019-1.6896-1.6896c.5232-.7721.7398-1.7116.6075-2.6349-.1324-.9232-.6041-1.764-1.3232-2.3581s-1.6338-.8987-2.5655-.8545c-.9316.0443-1.8134.4342-2.4729 1.0938-.6595.6595-1.0495 1.5412-1.0938 2.4729-.0442.9317.2605 1.8464.8545 2.5655.5941.719 1.4349 1.1908 2.3582 1.3232.9233.1323 1.8627-.0843 2.6349-.6076l1.6896 1.6897c.1326.1326.3125.2071.5001.2071s.3675-.0745.5002-.2071c.1326-.1327.2072-.3126.2072-.5002s-.0746-.3675-.2072-.5002zm-4.7939-1.2918c-.4951.0002-.9791-.1464-1.3908-.4214-.4118-.2749-.7327-.6658-.9222-1.1231-.1896-.4574-.2392-.9607-.1427-1.4462.0965-.4856.3349-.9316.685-1.2817s.7961-.5885 1.2817-.685c.4856-.0966.9889-.0469 1.4462.1426.4574.1896.8482.5105 1.1232.9222.2749.4118.4215.8958.4213 1.3909 0 .6635-.2635 1.2998-.7327 1.769-.4692.4691-1.1055.7327-1.769.7327z" fillRule="evenodd" /><Path d="m23.4844 24.3594h1.5v4.03125h-1.5z" /><Path d="m23.4844 14.4844h1.5v3.8125h-1.5z" /><Path d="m23.4844 14.4844h1.5v3.8125h-1.5z" /><Path d="m23.4844 14.4844h1.5v3.8125h-1.5z" /><Path d="m23.4844 14.4844h1.5v3.8125h-1.5z" /></G><Path d="m33.1606 14.4844h-17.6962c-.6707 0-1.2144.3917-1.2144.875v12.75c0 .4832.5437.875 1.2144.875h17.6962c.6707 0 1.2144-.3918 1.2144-.875v-12.75c0-.4833-.5437-.875-1.2144-.875z" stroke="currentColor" strokeWidth="1.5" fill="none" /></SVG>;
export default icons;