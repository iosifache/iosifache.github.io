import Configuration from './configuration';

export function createTitle(title) {
    return (
        Configuration.website.base_title +
        Configuration.website.title_separator +
        title
    );
}
