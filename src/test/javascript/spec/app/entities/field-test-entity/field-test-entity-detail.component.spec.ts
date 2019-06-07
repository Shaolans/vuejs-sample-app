/* tslint:disable max-line-length */
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import axios from 'axios';

import * as config from '@/shared/config/config';
import FieldTestEntityDetailComponent from '@/entities/field-test-entity/field-test-entity-details.vue';
import FieldTestEntityClass from '@/entities/field-test-entity/field-test-entity-details.component';
import FieldTestEntityService from '@/entities/field-test-entity/field-test-entity.service';

const localVue = createLocalVue();
const mockedAxios: any = axios;

config.initVueApp(localVue);
const i18n = config.initI18N(localVue);
const store = config.initVueXStore(localVue);
localVue.component('font-awesome-icon', {});
localVue.component('router-link', {});

jest.mock('axios', () => ({
  get: jest.fn()
}));

describe('Component Tests', () => {
  describe('FieldTestEntity Management Detail Component', () => {
    let wrapper: Wrapper<FieldTestEntityClass>;
    let comp: FieldTestEntityClass;

    beforeEach(() => {
      mockedAxios.get.mockReset();
      mockedAxios.get.mockReturnValue(Promise.resolve({}));

      wrapper = shallowMount<FieldTestEntityClass>(FieldTestEntityDetailComponent, {
        store,
        i18n,
        localVue,
        provide: { fieldTestEntityService: () => new FieldTestEntityService() }
      });
      comp = wrapper.vm;
    });

    describe('OnInit', async () => {
      it('Should call load all on init', async () => {
        // GIVEN
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: { id: 123 } }));

        // WHEN
        comp.retrieveFieldTestEntity(123);
        await comp.$nextTick();

        // THEN
        expect(comp.fieldTestEntity).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
