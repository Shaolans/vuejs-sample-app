import axios from 'axios';

import { IFieldTestEntity } from '@/shared/model/field-test-entity.model';

const baseApiUrl = 'api/field-test-entities';

export default class FieldTestEntityService {
  public find(id): Promise<IFieldTestEntity> {
    return new Promise<IFieldTestEntity>(resolve => {
      axios.get(`${baseApiUrl}/${id}`).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public retrieve(paginationQuery?: any): Promise<any> {
    return new Promise<any>(resolve => {
      axios.get(baseApiUrl).then(function(res) {
        resolve(res);
      });
    });
  }

  public delete(id): Promise<any> {
    return new Promise<any>(resolve => {
      axios.delete(`${baseApiUrl}/${id}`).then(function(res) {
        resolve(res);
      });
    });
  }

  public create(entity): Promise<IFieldTestEntity> {
    return new Promise<IFieldTestEntity>(resolve => {
      axios.post(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }

  public update(entity): Promise<IFieldTestEntity> {
    return new Promise<IFieldTestEntity>(resolve => {
      axios.put(`${baseApiUrl}`, entity).then(function(res) {
        resolve(res.data);
      });
    });
  }
}
