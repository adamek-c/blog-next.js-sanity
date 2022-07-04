export interface Post {
	_id: number;
	title: string;
	slug: {
		current: string;
	};
	author: {
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
}
