import './slider';
import popups from './modules/popups';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
    popups();
    tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
});