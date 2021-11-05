import {EmailDocument} from '@loopify-jfrog-public/loopify-document';
declare let document:EmailDocument;

document = {
	type: 'email',
	name: '__template_name__',
	subject: '',
	preHeader: '',
	tags: [
		'amazing',
		'stunning'
	],
	colorScheme: [
		'#000000',
		'#ffffff'
	],
	fonts: [
		{
			family: 'Open Sans',
			type: 'google',
			fallback: 'sans-serif',
			subsets: [
				'latin'
			],
			variants: [
				'light',
				'regular',
				'semi-bold',
				'bold',
				'extra-bold'
			]
		}
	],
	scope: {
		document: {
			contentWidth: 600,
			bodyBgImage: 'https://static.loopify.com/images/crop:3456,4608,0,0/resize:1920,/02521a34-3ced-4b1d-bcdc-e7a5e75f0d5e.jpg',
			linkColor: '#5AB44D',
			__externalProductDataBaseUrl: ''
		},
		fonts: {
			globalFontFamily: "'Open Sans'"
		}
	},
	campaignScope: {},
	scopeDescriptors: {
		'document.contentWidth': {
			name: 'Content width (px)',
			type: 'number',
			inputType: 'number',
			inputTypeProperties: {
			},
			tooltip: 'Document content width (px)',
			placeholder: 'Document content width (px)',
			autocomplete: true,
			autofocus: false,
			disabled: false,
			validationRules: []
		},
		'document.linkColor': {
			name: 'Link color',
			type: 'string',
			inputType: 'color',
			inputTypeProperties: {
				onlyAllowPresets: false,
				presets: []
			},
			tooltip: 'The default link color of all content',
			placeholder: 'Color',
			autocomplete: true,
			autofocus: false,
			disabled: false,
			validationRules: []
		},
		'document.bodyBgImage': {
			name: 'Background image',
			type: 'string',
			inputType: 'loopify-file',
			inputTypeProperties: {
				name: 'Browse',
				accept: 'image/*'
			},
			tooltip: 'Document background image',
			placeholder: 'Choose an image',
			autocomplete: false,
			autofocus: false,
			disabled: false,
			validationRules: []
		},
		'document.__externalProductDataBaseUrl': {
			name: 'Webshop url',
			type: 'string',
			inputType: 'text',
			inputTypeProperties: {
			},
			tooltip: 'The default webshop url of all content',
			placeholder: 'Text',
			autocomplete: true,
			autofocus: false,
			disabled: false,
			validationRules: []
		},
		'fonts.globalFontFamily': {
			name: 'document font family',
			source: 'document.font',
			type: 'object',
			inputType: 'font-select',
			inputTypeProperties: {
				accountFontsOnly: false
			},
			tooltip: 'The fallback font for all text',
			placeholder: 'Font',
			autocomplete: true,
			autofocus: false,
			disabled: false,
			validationRules: []
		}
	},
	hiddenScopeProperties: [],
	html: 'templates/root.html',
	modules: [
		{
			_id: '1C-1A-Logo-I',
			name: 'One column, one article logo and webversion',
			enabled: false,
			modulesAllowed: 'aboveAndBelow',
			removable: true,
			movable: true,
			editable: true,
			scope: {
				image: 'https://static.loopify.com/images/crop:300,109,0,0/resize:250,/10d95e2e-731f-48a1-9343-bb65c25c9bd9.png',
				webversion: '<a type="webversion" href="www.loopify.com/webversion" target="_blank" title="" class="loopify-link">Webversion</a>'
			},
			sharedScope: {},
			scopeDescriptors: {},
			hiddenScopeProperties: [
				'image',
				'webversion'
			],
			html: 'templates/1C-1A-Logo-I.html',
			filter: undefined
		},
		{
			_id: 'ml-4ba252f8115e239ad4ce297687259fa5',
			name: 'One column, one article product line data',
			enabled: true,
			modulesAllowed: 'aboveAndBelow',
			removable: true,
			movable: true,
			editable: true,
			scope: {
				data: [{
					id: 'Placeholder id',
					imageUrl: 'https://static.loopify.com/images/crop:3680,2456,0,0/resize:272,/2146c976-54a9-4b6c-b732-dba44424d2cc.jpg',
					title: 'Placeholder title',
					description: 'Placeholder description',
					price: 'Placeholder price',
					callToAction: 'Placeholder button',
					callToActionText: 'BUY NOW',
					callToActionAnchor: {}
				}],
				query: '',
				changeOrder: false
			},
			sharedScope: {
				source: 'https://api.loopify.com/system/external-product-data?url=https%3A%2F%2Fwww.dropbox.com%2Fs%2Ff2z7ull4gclmcg6%2FSurfsUp_Poductdata.csv%3Fdl%3D1'
			},
			scopeDescriptors:{
				'query': {
					name: 'Query',
					type: 'string',
					inputType: 'data-query',
					inputTypeProperties: {
						dataScopeBinding: 'data',
						sourceScopeBinding: 'source'
					},
					tooltip: 'The search for which data is matched',
					placeholder: 'Query',
					autocomplete: true,
					autofocus: false,
					disabled: false,
					validationRules: []
				},
				'changeOrder': {
					name: 'Change Direction',
					type: 'boolean',
					inputType: 'checkbox',
					inputTypeProperties: {},
					tooltip: '',
					placeholder: '',
					autocomplete: true,
					autofocus: false,
					disabled: false,
					validationRules: []
				}
			},
			hiddenScopeProperties:[
				'data'
			],
			html: 'templates/1C-1A-ITPL-swap.html',
			filter: undefined
		},
		{
			_id: 'ml-49f40336cc6d5db09a466a8eaf175426',
			name: 'One column, one article paragraph',
			enabled: true,
			modulesAllowed: 'aboveAndBelow',
			removable: true,
			movable: true,
			editable: true,
			scope:{
				content: {
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in ante aliquam, lobortis ante eu, consectetur nulla. Sed vitae posuere purus. Vivamus pretium et ipsum vel pretium. Nunc elementum tempus magna id iaculis. Pellentesque at turpis dolor. Vivamus ut dui feugiat, sodales dolor quis, aliquam neque. Nam sollicitudin tincidunt est efficitur suscipit. Ut sollicitudin commodo neque sed ornare. Ut et metus elementum, tristique dolor vel, luctus elit. Suspendisse sit amet cursus nulla, in hendrerit nisl. Morbi non lacus at libero porttitor porttitor."
				},
				textAlign: 'left'
			},
			sharedScope:{
			},
			scopeDescriptors:{
				'textAlign': {
					name: 'Text Align',
					type: 'string',
					inputType: 'single-select',
					inputTypeProperties: {
					options: [
						{name: 'Left', value: 'left'},
						{name: 'Center', value: 'center'},
						{name: 'Right', value: 'right'}
					]
					},
					tooltip: 'Text Align',
					placeholder: 'Text Align',
					autocomplete: true,
					autofocus: false,
					disabled: false,
					validationRules: []
				}
			},
			hiddenScopeProperties:[
				'content.*'
			],
			html: 'templates/1C-1A-P.html',
			filter: undefined
		},
		{
			_id: 'ml-8c459b5232508720acf1939774007e2e',
			name: 'One column, one article link',
			enabled: true,
			modulesAllowed: 'aboveAndBelow',
			removable: true,
			movable: true,
			editable: true,
			scope:{
				content: {
					buttonText: 'Read More'
				},
				borderRadius: '5px',
				link: {}
			},
			sharedScope:{
			},
			scopeDescriptors:{
				'borderRadius':{
					name: 'Border radius',
					type: 'object',
					inputType: 'number-and-unit',
					inputTypeProperties: {
						units: [
							{name: 'Pixels', value: 'px'},
							{name: 'Points', value: 'pt'}
						]
					},
					tooltip: 'Border radius for the button',
					placeholder: 'Border radius for the button',
					autocomplete: true,
					autofocus: false,
					disabled: false,
					validationRules: []
				}
			},
			hiddenScopeProperties:[
				'link.*',
				'content.*'
			],
			html: 'templates/1C-1A-L.html',
			filter: undefined
		},
		{
			_id: 'ml-4ba252f8115e239ad4ce297687259fa5',
			name: 'One column, one article product line data',
			enabled: true,
			modulesAllowed: 'aboveAndBelow',
			removable: true,
			movable: true,
			editable: true,
			scope: {
				data: [{
					id: 'Placeholder id',
					imageUrl: 'https://static.loopify.com/images/crop:4753,3176,1190,788/resize:262,/c3794ca3-d35e-4feb-b648-79dc6d1e2d42.jpg',
					title: 'Placeholder title',
					description: 'Placeholder description',
					price: 'Placeholder price',
					callToAction: 'Placeholder button',
					callToActionText: 'BUY NOW',
					callToActionAnchor: {}
				}],
				query: '',
				changeOrder: true
			},
			sharedScope: {
				source: 'https://api.loopify.com/system/external-product-data?url=https%3A%2F%2Fwww.dropbox.com%2Fs%2Ff2z7ull4gclmcg6%2FSurfsUp_Poductdata.csv%3Fdl%3D1'
			},
			scopeDescriptors:{
				'changeOrder': {
					name: 'Change Direction',
					type: 'boolean',
					inputType: 'checkbox',
					inputTypeProperties: {},
					tooltip: '',
					placeholder: '',
					autocomplete: true,
					autofocus: false,
					disabled: false,
					validationRules: []
				},
				'query': {
					name: 'Query',
					type: 'string',
					inputType: 'data-query',
					inputTypeProperties: {
						dataScopeBinding: 'data',
						sourceScopeBinding: 'source'
					},
					tooltip: 'The search for which data is matched',
					placeholder: 'Query',
					autocomplete: true,
					autofocus: false,
					disabled: false,
					validationRules: []
				}
			},
			hiddenScopeProperties:[
				'data'
			],
			html: 'templates/1C-1A-ITPL-swap.html',
			filter: undefined
		},
		{
			_id: '1C-1A-Footer',
			name: 'One column, one article footer ',
			enabled: false,
			modulesAllowed: 'aboveAndBelow',
			removable: true,
			movable: true,
			editable: true,
			scope: {
				image: 'https://static.loopify.com/images/crop:300,109,0,0/resize:250,/10d95e2e-731f-48a1-9343-bb65c25c9bd9.png',
				unsubscribe: '<a type="subscription" href="" target="_blank" title="" class="loopify-link">Unsubscribe.</a>',
				contact: 'Your address here |  Your company information  | Your company phone | Your company email'
			},
			sharedScope: {},
			scopeDescriptors: {},
			hiddenScopeProperties: [
				'image',
				'unsubscribe',
				'contact'
			],
			html: 'templates/1C-1A-Footer.html',
			filter: undefined
		},
		{
			_id: 'ml-e5e8ca80fdeeb6f9bd2d4b835f485ce6',
			name: 'One column, one article social media',
			enabled: false,
			modulesAllowed: 'aboveAndBelow',
			removable: true,
			movable: true,
			editable: true,
			scope: {
				socialMediaButtons: {
					setting: '',
					socialChannels: [
						{
							icon: 'fa-facebook',
							link: {}
						},
						{
							icon: 'fa-instagram',
							link: {}
						}
					],
					socialStyle: {
						backgroundColor: '#5AB44D',
						textColor: '#ffffff',
						borderColor: '#5AB44D',
						useBrandColors: false,
						borderRadius: '10px',
						borderWidth: '1px',
						vertical: false,
						alignment: 'center',
						fontSize: '15px',
						padding: '10px',
						margin: '5px',
						width: '35px',
						height: '35px'
					}
				}
			},
			sharedScope: {},
			scopeDescriptors: {
				'socialMediaButtons.setting': {
					name: 'Social Setting',
					type: 'string',
					inputType: 'social-channels',
					inputTypeProperties: {
						/*
							target must be set to the parent object of socialStyle and socialChannels
						*/
						target: 'socialMediaButtons'
					},
					tooltip: 'The width of this module',
					placeholder: 'soc',
					autocomplete: true,
					autofocus: false,
					disabled: false,
					validationRules: []
				}
			},
			hiddenScopeProperties: [
				'socialMediaButtons.socialChannels.*',
				'socialMediaButtons.socialStyle.*'
			],
			html: 'templates/1C-1A-So-Me.html',
			filter: undefined
		}
	],
	allModules: [
		{
			_id: '1C-1A-Logo-I',
			name: 'One column, one article logo and webversion',
			enabled: false,
			modulesAllowed: 'aboveAndBelow',
			removable: true,
			movable: true,
			editable: true,
			scope: {
				image: 'https://static.loopify.com/images/crop:300,109,0,0/resize:250,/10d95e2e-731f-48a1-9343-bb65c25c9bd9.png',
				webversion: '<a type="webversion" href="www.loopify.com/webversion" target="_blank" title="" class="loopify-link">Webversion</a>'
			},
			sharedScope: {},
			scopeDescriptors: {},
			hiddenScopeProperties: [
				'image',
				'webversion'
			],
			html: 'templates/1C-1A-Logo-I.html',
			filter: undefined
		},
		{
			_id: 'ml-4ba252f8115e239ad4ce297687259fa5',
			name: 'One column, one article product line data',
			enabled: true,
			modulesAllowed: 'aboveAndBelow',
			removable: true,
			movable: true,
			editable: true,
			scope: {
				data: [{
					id: 'Placeholder id',
					imageUrl: 'https://static.loopify.com/images/crop:4753,3176,1190,788/resize:262,/c3794ca3-d35e-4feb-b648-79dc6d1e2d42.jpg',
					title: 'Placeholder title',
					description: 'Placeholder description',
					price: 'Placeholder price',
					callToAction: 'Placeholder button',
					callToActionText: 'BUY NOW',
					callToActionAnchor: {}
				}],
				query: '',
				changeOrder: true
			},
			sharedScope: {
				source: 'https://api.loopify.com/system/external-product-data?url=https%3A%2F%2Fwww.dropbox.com%2Fs%2Ff2z7ull4gclmcg6%2FSurfsUp_Poductdata.csv%3Fdl%3D1'
			},
			scopeDescriptors:{
				'changeOrder': {
					name: 'Change Direction',
					type: 'boolean',
					inputType: 'checkbox',
					inputTypeProperties: {},
					tooltip: '',
					placeholder: '',
					autocomplete: true,
					autofocus: false,
					disabled: false,
					validationRules: []
				},
				'query': {
					name: 'Query',
					type: 'string',
					inputType: 'data-query',
					inputTypeProperties: {
						dataScopeBinding: 'data',
						sourceScopeBinding: 'source'
					},
					tooltip: 'The search for which data is matched',
					placeholder: 'Query',
					autocomplete: true,
					autofocus: false,
					disabled: false,
					validationRules: []
				}
			},
			hiddenScopeProperties:[
				'data'
			],
			html: 'templates/1C-1A-ITPL-swap.html',
			filter: undefined
		},
		{
			_id: 'ml-49f40336cc6d5db09a466a8eaf175426',
			name: 'One column, one article paragraph',
			enabled: true,
			modulesAllowed: 'aboveAndBelow',
			removable: true,
			movable: true,
			editable: true,
			scope:{
				content: {
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in ante aliquam, lobortis ante eu, consectetur nulla. Sed vitae posuere purus. Vivamus pretium et ipsum vel pretium. Nunc elementum tempus magna id iaculis. Pellentesque at turpis dolor. Vivamus ut dui feugiat, sodales dolor quis, aliquam neque. Nam sollicitudin tincidunt est efficitur suscipit. Ut sollicitudin commodo neque sed ornare. Ut et metus elementum, tristique dolor vel, luctus elit. Suspendisse sit amet cursus nulla, in hendrerit nisl. Morbi non lacus at libero porttitor porttitor."
				},
				textAlign: 'left'
			},
			sharedScope:{
			},
			scopeDescriptors:{
				'textAlign': {
					name: 'Text Align',
					type: 'string',
					inputType: 'single-select',
					inputTypeProperties: {
					options: [
						{name: 'Left', value: 'left'},
						{name: 'Center', value: 'center'},
						{name: 'Right', value: 'right'}
					]
					},
					tooltip: 'Text Align',
					placeholder: 'Text Align',
					autocomplete: true,
					autofocus: false,
					disabled: false,
					validationRules: []
				}
			},
			hiddenScopeProperties:[
				'content.*'
			],
			html: 'templates/1C-1A-P.html',
			filter: undefined
		},
		{
			_id: 'ml-8c459b5232508720acf1939774007e2e',
			name: 'One column, one article link',
			enabled: true,
			modulesAllowed: 'aboveAndBelow',
			removable: true,
			movable: true,
			editable: true,
			scope:{
				content: {
					buttonText: 'Read More'
				},
				borderRadius: '5px',
				link: {}
			},
			sharedScope:{
			},
			scopeDescriptors:{
				'borderRadius':{
					name: 'Border radius',
					type: 'object',
					inputType: 'number-and-unit',
					inputTypeProperties: {
						units: [
							{name: 'Pixels', value: 'px'},
							{name: 'Points', value: 'pt'}
						]
					},
					tooltip: 'Border radius for the button',
					placeholder: 'Border radius for the button',
					autocomplete: true,
					autofocus: false,
					disabled: false,
					validationRules: []
				}
			},
			hiddenScopeProperties:[
				'link.*',
				'content.*'
			],
			html: 'templates/1C-1A-L.html',
			filter: undefined
		},
		{
			_id: 'ml-e5e8ca80fdeeb6f9bd2d4b835f485ce6',
			name: 'One column, one article social media',
			enabled: false,
			modulesAllowed: 'aboveAndBelow',
			removable: true,
			movable: true,
			editable: true,
			scope: {
				socialMediaButtons: {
					setting: '',
					socialChannels: [
						{
							icon: 'fa-facebook',
							link: {}
						},
						{
							icon: 'fa-instagram',
							link: {}
						}
					],
					socialStyle: {
						backgroundColor: '#5AB44D',
						textColor: '#ffffff',
						borderColor: '#5AB44D',
						useBrandColors: false,
						borderRadius: '10px',
						borderWidth: '1px',
						vertical: false,
						alignment: 'center',
						fontSize: '15px',
						padding: '10px',
						margin: '5px',
						width: '35px',
						height: '35px'
					}
				}
			},
			sharedScope: {},
			scopeDescriptors: {
				'socialMediaButtons.setting': {
					name: 'Social Setting',
					type: 'string',
					inputType: 'social-channels',
					inputTypeProperties: {
						/*
							target must be set to the parent object of socialStyle and socialChannels
						*/
						target: 'socialMediaButtons'
					},
					tooltip: 'The width of this module',
					placeholder: 'soc',
					autocomplete: true,
					autofocus: false,
					disabled: false,
					validationRules: []
				}
			},
			hiddenScopeProperties: [
				'socialMediaButtons.socialChannels.*',
				'socialMediaButtons.socialStyle.*'
			],
			html: 'templates/1C-1A-So-Me.html',
			filter: undefined
		},
		{
			_id: '1C-1A-Footer',
			name: 'One column, one article footer ',
			enabled: false,
			modulesAllowed: 'aboveAndBelow',
			removable: true,
			movable: true,
			editable: true,
			scope: {
				image: 'https://static.loopify.com/images/crop:300,109,0,0/resize:250,/10d95e2e-731f-48a1-9343-bb65c25c9bd9.png',
				unsubscribe: '<a type="subscription" href="" target="_blank" title="" class="loopify-link">Unsubscribe.</a>',
				contact: 'Your address here |  Your company information  | Your company phone | Your company email'
			},
			sharedScope: {},
			scopeDescriptors: {},
			hiddenScopeProperties: [
				'image',
				'unsubscribe',
				'contact'
			],
			html: 'templates/1C-1A-Footer.html',
			filter: undefined
		}
	]
};