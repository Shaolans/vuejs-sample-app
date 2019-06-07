import { element, by, ElementFinder } from 'protractor';

import { waitUntilCount, waitUntilDisplayed } from '../../util/utils';

export default class FieldTestEntityComponentsPage {
  async isSaveButtonPresent() {
    const saveButton = await element(by.id('save-entity'));
    return await saveButton.isPresent();
  }

  async save() {
    const saveButton = await element(by.id('save-entity'));
    await saveButton.click();
  }

  async cancel() {
    const cancelButton = await element(by.id('cancel-save'));
    await cancelButton.click();
  }

  async getCreateButton() {
    return await element(by.id('jh-create-entity'));
  }

  async clickOnCreateButton() {
    await element(by.id('jh-create-entity')).click();
  }

  async getDetailButtons() {
    return await element.all(by.css('.btn-info.details'));
  }

  async clickOnLastDetailsButton() {
    await element
      .all(by.css('.btn-info.details'))
      .last()
      .click();
  }

  async getEditButtons() {
    return await element.all(by.css('.btn-primary.edit'));
  }

  async clickOnLastEditButton() {
    await element
      .all(by.css('.btn-primary.edit'))
      .last()
      .click();
  }

  async getDeleteButtons() {
    return await element.all(by.css('div table .btn-danger'));
  }

  async clickOnLastDeleteButton() {
    await element
      .all(by.css('div table .btn-danger'))
      .last()
      .click();
  }

  async countDeleteButtons() {
    const deleteButtons = await element.all(by.css('div table .btn-danger'));
    return deleteButtons.length;
  }

  async getTitle() {
    return await element(by.id('field-test-entity-heading'));
  }

  async getFooter() {
    return await element(by.id('footer'));
  }

  async waitUntilLoaded() {
    await waitUntilDisplayed(element.all(by.css('div table .btn-danger')).first());
  }

  async waitUntilDeleteButtonsLength(length) {
    await waitUntilCount(element.all(by.css('div table .btn-danger')), length);
  }
}

export class FieldTestEntityDeleteDialog {
  private dialogTitle: ElementFinder = element(by.id('jhipsterApp.fieldTestEntity.delete.question'));
  private confirmButton = element(by.id('jhi-confirm-delete-fieldTestEntity'));

  getDialogTitle() {
    return this.dialogTitle;
  }

  async clickOnConfirmButton() {
    await this.confirmButton.click();
  }
}
