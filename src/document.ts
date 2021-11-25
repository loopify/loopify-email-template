import {EmailRootTemplate} from '@loopify-jfrog-public/loopify-document';
declare let document:EmailRootTemplate;

document = {
	type: 'email',
	name: '__template_name__',
	tags: [],
	compatibility: [],
	fonts: [],
	scope: {},
	campaignScope: {},
	scopeDescriptors: {},
	hiddenScopeProperties: [],
	html: 'templates/root.html',
	modules: [
		{
			_id: 'ml-49f40336cc6d5db09a466a8eaf175426',
			name: 'Paragraph',
			modulesAllowed: 'aboveAndBelow',
			removable: true,
			movable: true,
			editable: true,
			scope:{}
		}
	],
	allModules: [
		{
			_id: 'ml-49f40336cc6d5db09a466a8eaf175426',
			name: 'Paragraph',
			enabled: true,
			modulesAllowed: 'aboveAndBelow',
			removable: true,
			movable: true,
			editable: true,
			scope:{},
			sharedScope:{},
			scopeDescriptors:{},
			hiddenScopeProperties:[],
			html: 'templates/module.html'
		}
	]
};