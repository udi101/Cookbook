import {WellEventComponent} from './wellEvents.component';

describe('WellEventComponent Tests', () => {
    let wellEventComponent: WellEventComponent, mockEventService;
    beforeEach(() => {
        wellEventComponent = new WellEventComponent(mockEventService);
    });
    it('should create component', () => {
        expect(wellEventComponent).toBeDefined();
    });

});