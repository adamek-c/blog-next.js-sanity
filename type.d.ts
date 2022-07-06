export interface Post {
	_id: number;
	title: string;
	slug: {
		current: string;
	};
	author: {
		image: {
			assets: {
				_ref: string;
			};
		};
		name: string;
	};
	mainImage: {
		asset: {
			_ref: string;
		};
	};
	description: string;
	publishedAt: string;
	body: [object];
	categories: {
		_ref: string;
	};
}
