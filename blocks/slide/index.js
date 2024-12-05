import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import metadata from './block.json';

const icon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
	<path fill="currentColor" d="M7.728 9A.73.73 0 0 0 7 9.728v.044c0 .402.326.728.728.728h5.544A.73.73 0 0 0 14 9.772v-.044A.73.73 0 0 0 13.272 9zm0 4a.73.73 0 0 0-.728.728v.044c0 .402.326.728.728.728h10.544a.73.73 0 0 0 .728-.728v-.044a.73.73 0 0 0-.728-.728zM7 17.728c0-.402.326-.728.728-.728h7.544c.402 0 .728.326.728.728v.044a.73.73 0 0 1-.728.728H7.728A.73.73 0 0 1 7 17.772zM5.754 4a3.75 3.75 0 0 0-3.75 3.75v12.5A3.75 3.75 0 0 0 5.754 24H22.25A3.75 3.75 0 0 0 26 20.25V7.75A3.75 3.75 0 0 0 22.25 4zm-2.25 3.75a2.25 2.25 0 0 1 2.25-2.25H22.25a2.25 2.25 0 0 1 2.25 2.25v12.5a2.25 2.25 0 0 1-2.25 2.25H5.755a2.25 2.25 0 0 1-2.25-2.25z" />
</svg>
)

registerBlockType( metadata.name, {
	edit: Edit,
	save,
    icon,
} );
