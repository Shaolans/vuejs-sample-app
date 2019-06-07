import { element, by, ElementFinder, protractor, browser } from 'protractor';
import { clearElement, waitUntilDisplayed } from '../../util/utils';

export default class FieldTestEntityUpdatePage {
  async getPageTitle() {
    return await element(by.id('jhipsterApp.fieldTestEntity.home.createOrEditLabel'));
  }

  async getFooter() {
    return await element(by.id('footer'));
  }

  async getSaveButton() {
    return await element(by.id('save-entity'));
  }

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

  //--------------------------------------------------

  async findStringTomInput() {
    return await element(by.css('input#field-test-entity-stringTom'));
  }

  async setStringTomInput(stringTom) {
    const elementInput = await this.findStringTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(stringTom);
  }

  async getStringTomInput() {
    const elementInput = await this.findStringTomInput();
    return elementInput.getAttribute('value');
  }

  async clearStringTomInput() {
    const elementInput = await this.findStringTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findStringRequiredTomInput() {
    return await element(by.css('input#field-test-entity-stringRequiredTom'));
  }

  async setStringRequiredTomInput(stringRequiredTom) {
    const elementInput = await this.findStringRequiredTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(stringRequiredTom);
  }

  async getStringRequiredTomInput() {
    const elementInput = await this.findStringRequiredTomInput();
    return elementInput.getAttribute('value');
  }

  async clearStringRequiredTomInput() {
    const elementInput = await this.findStringRequiredTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findStringMinlengthTomInput() {
    return await element(by.css('input#field-test-entity-stringMinlengthTom'));
  }

  async setStringMinlengthTomInput(stringMinlengthTom) {
    const elementInput = await this.findStringMinlengthTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(stringMinlengthTom);
  }

  async getStringMinlengthTomInput() {
    const elementInput = await this.findStringMinlengthTomInput();
    return elementInput.getAttribute('value');
  }

  async clearStringMinlengthTomInput() {
    const elementInput = await this.findStringMinlengthTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findStringMaxlengthTomInput() {
    return await element(by.css('input#field-test-entity-stringMaxlengthTom'));
  }

  async setStringMaxlengthTomInput(stringMaxlengthTom) {
    const elementInput = await this.findStringMaxlengthTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(stringMaxlengthTom);
  }

  async getStringMaxlengthTomInput() {
    const elementInput = await this.findStringMaxlengthTomInput();
    return elementInput.getAttribute('value');
  }

  async clearStringMaxlengthTomInput() {
    const elementInput = await this.findStringMaxlengthTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findStringPatternTomInput() {
    return await element(by.css('input#field-test-entity-stringPatternTom'));
  }

  async setStringPatternTomInput(stringPatternTom) {
    const elementInput = await this.findStringPatternTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(stringPatternTom);
  }

  async getStringPatternTomInput() {
    const elementInput = await this.findStringPatternTomInput();
    return elementInput.getAttribute('value');
  }

  async clearStringPatternTomInput() {
    const elementInput = await this.findStringPatternTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findIntegerTomInput() {
    return await element(by.css('input#field-test-entity-integerTom'));
  }

  async setIntegerTomInput(integerTom) {
    const elementInput = await this.findIntegerTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(integerTom);
  }

  async getIntegerTomInput() {
    const elementInput = await this.findIntegerTomInput();
    return elementInput.getAttribute('value');
  }

  async clearIntegerTomInput() {
    const elementInput = await this.findIntegerTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findIntegerRequiredTomInput() {
    return await element(by.css('input#field-test-entity-integerRequiredTom'));
  }

  async setIntegerRequiredTomInput(integerRequiredTom) {
    const elementInput = await this.findIntegerRequiredTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(integerRequiredTom);
  }

  async getIntegerRequiredTomInput() {
    const elementInput = await this.findIntegerRequiredTomInput();
    return elementInput.getAttribute('value');
  }

  async clearIntegerRequiredTomInput() {
    const elementInput = await this.findIntegerRequiredTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findIntegerMinTomInput() {
    return await element(by.css('input#field-test-entity-integerMinTom'));
  }

  async setIntegerMinTomInput(integerMinTom) {
    const elementInput = await this.findIntegerMinTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(integerMinTom);
  }

  async getIntegerMinTomInput() {
    const elementInput = await this.findIntegerMinTomInput();
    return elementInput.getAttribute('value');
  }

  async clearIntegerMinTomInput() {
    const elementInput = await this.findIntegerMinTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findIntegerMaxTomInput() {
    return await element(by.css('input#field-test-entity-integerMaxTom'));
  }

  async setIntegerMaxTomInput(integerMaxTom) {
    const elementInput = await this.findIntegerMaxTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(integerMaxTom);
  }

  async getIntegerMaxTomInput() {
    const elementInput = await this.findIntegerMaxTomInput();
    return elementInput.getAttribute('value');
  }

  async clearIntegerMaxTomInput() {
    const elementInput = await this.findIntegerMaxTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findLongTomInput() {
    return await element(by.css('input#field-test-entity-longTom'));
  }

  async setLongTomInput(longTom) {
    const elementInput = await this.findLongTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(longTom);
  }

  async getLongTomInput() {
    const elementInput = await this.findLongTomInput();
    return elementInput.getAttribute('value');
  }

  async clearLongTomInput() {
    const elementInput = await this.findLongTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findLongRequiredTomInput() {
    return await element(by.css('input#field-test-entity-longRequiredTom'));
  }

  async setLongRequiredTomInput(longRequiredTom) {
    const elementInput = await this.findLongRequiredTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(longRequiredTom);
  }

  async getLongRequiredTomInput() {
    const elementInput = await this.findLongRequiredTomInput();
    return elementInput.getAttribute('value');
  }

  async clearLongRequiredTomInput() {
    const elementInput = await this.findLongRequiredTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findLongMinTomInput() {
    return await element(by.css('input#field-test-entity-longMinTom'));
  }

  async setLongMinTomInput(longMinTom) {
    const elementInput = await this.findLongMinTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(longMinTom);
  }

  async getLongMinTomInput() {
    const elementInput = await this.findLongMinTomInput();
    return elementInput.getAttribute('value');
  }

  async clearLongMinTomInput() {
    const elementInput = await this.findLongMinTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findLongMaxTomInput() {
    return await element(by.css('input#field-test-entity-longMaxTom'));
  }

  async setLongMaxTomInput(longMaxTom) {
    const elementInput = await this.findLongMaxTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(longMaxTom);
  }

  async getLongMaxTomInput() {
    const elementInput = await this.findLongMaxTomInput();
    return elementInput.getAttribute('value');
  }

  async clearLongMaxTomInput() {
    const elementInput = await this.findLongMaxTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findFloatTomInput() {
    return await element(by.css('input#field-test-entity-floatTom'));
  }

  async setFloatTomInput(floatTom) {
    const elementInput = await this.findFloatTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(floatTom);
  }

  async getFloatTomInput() {
    const elementInput = await this.findFloatTomInput();
    return elementInput.getAttribute('value');
  }

  async clearFloatTomInput() {
    const elementInput = await this.findFloatTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findFloatRequiredTomInput() {
    return await element(by.css('input#field-test-entity-floatRequiredTom'));
  }

  async setFloatRequiredTomInput(floatRequiredTom) {
    const elementInput = await this.findFloatRequiredTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(floatRequiredTom);
  }

  async getFloatRequiredTomInput() {
    const elementInput = await this.findFloatRequiredTomInput();
    return elementInput.getAttribute('value');
  }

  async clearFloatRequiredTomInput() {
    const elementInput = await this.findFloatRequiredTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findFloatMinTomInput() {
    return await element(by.css('input#field-test-entity-floatMinTom'));
  }

  async setFloatMinTomInput(floatMinTom) {
    const elementInput = await this.findFloatMinTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(floatMinTom);
  }

  async getFloatMinTomInput() {
    const elementInput = await this.findFloatMinTomInput();
    return elementInput.getAttribute('value');
  }

  async clearFloatMinTomInput() {
    const elementInput = await this.findFloatMinTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findFloatMaxTomInput() {
    return await element(by.css('input#field-test-entity-floatMaxTom'));
  }

  async setFloatMaxTomInput(floatMaxTom) {
    const elementInput = await this.findFloatMaxTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(floatMaxTom);
  }

  async getFloatMaxTomInput() {
    const elementInput = await this.findFloatMaxTomInput();
    return elementInput.getAttribute('value');
  }

  async clearFloatMaxTomInput() {
    const elementInput = await this.findFloatMaxTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findDoubleRequiredTomInput() {
    return await element(by.css('input#field-test-entity-doubleRequiredTom'));
  }

  async setDoubleRequiredTomInput(doubleRequiredTom) {
    const elementInput = await this.findDoubleRequiredTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(doubleRequiredTom);
  }

  async getDoubleRequiredTomInput() {
    const elementInput = await this.findDoubleRequiredTomInput();
    return elementInput.getAttribute('value');
  }

  async clearDoubleRequiredTomInput() {
    const elementInput = await this.findDoubleRequiredTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findDoubleMinTomInput() {
    return await element(by.css('input#field-test-entity-doubleMinTom'));
  }

  async setDoubleMinTomInput(doubleMinTom) {
    const elementInput = await this.findDoubleMinTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(doubleMinTom);
  }

  async getDoubleMinTomInput() {
    const elementInput = await this.findDoubleMinTomInput();
    return elementInput.getAttribute('value');
  }

  async clearDoubleMinTomInput() {
    const elementInput = await this.findDoubleMinTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findDoubleMaxTomInput() {
    return await element(by.css('input#field-test-entity-doubleMaxTom'));
  }

  async setDoubleMaxTomInput(doubleMaxTom) {
    const elementInput = await this.findDoubleMaxTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(doubleMaxTom);
  }

  async getDoubleMaxTomInput() {
    const elementInput = await this.findDoubleMaxTomInput();
    return elementInput.getAttribute('value');
  }

  async clearDoubleMaxTomInput() {
    const elementInput = await this.findDoubleMaxTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findBigDecimalRequiredTomInput() {
    return await element(by.css('input#field-test-entity-bigDecimalRequiredTom'));
  }

  async setBigDecimalRequiredTomInput(bigDecimalRequiredTom) {
    const elementInput = await this.findBigDecimalRequiredTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(bigDecimalRequiredTom);
  }

  async getBigDecimalRequiredTomInput() {
    const elementInput = await this.findBigDecimalRequiredTomInput();
    return elementInput.getAttribute('value');
  }

  async clearBigDecimalRequiredTomInput() {
    const elementInput = await this.findBigDecimalRequiredTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findBigDecimalMinTomInput() {
    return await element(by.css('input#field-test-entity-bigDecimalMinTom'));
  }

  async setBigDecimalMinTomInput(bigDecimalMinTom) {
    const elementInput = await this.findBigDecimalMinTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(bigDecimalMinTom);
  }

  async getBigDecimalMinTomInput() {
    const elementInput = await this.findBigDecimalMinTomInput();
    return elementInput.getAttribute('value');
  }

  async clearBigDecimalMinTomInput() {
    const elementInput = await this.findBigDecimalMinTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findBigDecimalMaxTomInput() {
    return await element(by.css('input#field-test-entity-bigDecimalMaxTom'));
  }

  async setBigDecimalMaxTomInput(bigDecimalMaxTom) {
    const elementInput = await this.findBigDecimalMaxTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(bigDecimalMaxTom);
  }

  async getBigDecimalMaxTomInput() {
    const elementInput = await this.findBigDecimalMaxTomInput();
    return elementInput.getAttribute('value');
  }

  async clearBigDecimalMaxTomInput() {
    const elementInput = await this.findBigDecimalMaxTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findLocalDateTomInput() {
    return await element(by.css('input#field-test-entity-localDateTom'));
  }

  async setLocalDateTomInput(localDateTom) {
    const elementInput = await this.findLocalDateTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(localDateTom);
  }

  async getLocalDateTomInput() {
    const elementInput = await this.findLocalDateTomInput();
    return elementInput.getAttribute('value');
  }

  async clearLocalDateTomInput() {
    const elementInput = await this.findLocalDateTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findLocalDateRequiredTomInput() {
    return await element(by.css('input#field-test-entity-localDateRequiredTom'));
  }

  async setLocalDateRequiredTomInput(localDateRequiredTom) {
    const elementInput = await this.findLocalDateRequiredTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(localDateRequiredTom);
  }

  async getLocalDateRequiredTomInput() {
    const elementInput = await this.findLocalDateRequiredTomInput();
    return elementInput.getAttribute('value');
  }

  async clearLocalDateRequiredTomInput() {
    const elementInput = await this.findLocalDateRequiredTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findInstantTomInput() {
    return await element(by.css('input#field-test-entity-instantTom'));
  }

  async setInstantTomInput(instantTom) {
    const elementInput = await this.findInstantTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(instantTom);
  }

  async getInstantTomInput() {
    const elementInput = await this.findInstantTomInput();
    return elementInput.getAttribute('value');
  }

  async clearInstantTomInput() {
    const elementInput = await this.findInstantTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findInstantRequiredTomInput() {
    return await element(by.css('input#field-test-entity-instantRequiredTom'));
  }

  async setInstantRequiredTomInput(instantRequiredTom) {
    const elementInput = await this.findInstantRequiredTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(instantRequiredTom);
  }

  async getInstantRequiredTomInput() {
    const elementInput = await this.findInstantRequiredTomInput();
    return elementInput.getAttribute('value');
  }

  async clearInstantRequiredTomInput() {
    const elementInput = await this.findInstantRequiredTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findZonedDateTimeTomInput() {
    return await element(by.css('input#field-test-entity-zonedDateTimeTom'));
  }

  async setZonedDateTimeTomInput(zonedDateTimeTom) {
    const elementInput = await this.findZonedDateTimeTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(zonedDateTimeTom);
  }

  async getZonedDateTimeTomInput() {
    const elementInput = await this.findZonedDateTimeTomInput();
    return elementInput.getAttribute('value');
  }

  async clearZonedDateTimeTomInput() {
    const elementInput = await this.findZonedDateTimeTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findZonedDateTimeRequiredTomInput() {
    return await element(by.css('input#field-test-entity-zonedDateTimeRequiredTom'));
  }

  async setZonedDateTimeRequiredTomInput(zonedDateTimeRequiredTom) {
    const elementInput = await this.findZonedDateTimeRequiredTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(zonedDateTimeRequiredTom);
  }

  async getZonedDateTimeRequiredTomInput() {
    const elementInput = await this.findZonedDateTimeRequiredTomInput();
    return elementInput.getAttribute('value');
  }

  async clearZonedDateTimeRequiredTomInput() {
    const elementInput = await this.findZonedDateTimeRequiredTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findDurationTomInput() {
    return await element(by.css('input#field-test-entity-durationTom'));
  }

  async setDurationTomInput(durationTom) {
    const elementInput = await this.findDurationTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(durationTom);
  }

  async getDurationTomInput() {
    const elementInput = await this.findDurationTomInput();
    return elementInput.getAttribute('value');
  }

  async clearDurationTomInput() {
    const elementInput = await this.findDurationTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findDurationRequiredTomInput() {
    return await element(by.css('input#field-test-entity-durationRequiredTom'));
  }

  async setDurationRequiredTomInput(durationRequiredTom) {
    const elementInput = await this.findDurationRequiredTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(durationRequiredTom);
  }

  async getDurationRequiredTomInput() {
    const elementInput = await this.findDurationRequiredTomInput();
    return elementInput.getAttribute('value');
  }

  async clearDurationRequiredTomInput() {
    const elementInput = await this.findDurationRequiredTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async clickBooleanTomInput() {
    const elementInput = await element(by.css('input#field-test-entity-booleanTom'));
    await elementInput.click();
  }

  async getBooleanTomInput() {
    const elementInput = await element(by.css('input#field-test-entity-booleanTom'));
    return elementInput;
  }

  async isSelectedBooleanTomInput() {
    const elementInput = await element(by.css('input#field-test-entity-booleanTom'));
    return await elementInput.isSelected();
  }

  //--------------------------------------------------

  async clickBooleanRequiredTomInput() {
    const elementInput = await element(by.css('input#field-test-entity-booleanRequiredTom'));
    await elementInput.click();
  }

  async getBooleanRequiredTomInput() {
    const elementInput = await element(by.css('input#field-test-entity-booleanRequiredTom'));
    return elementInput;
  }

  async isSelectedBooleanRequiredTomInput() {
    const elementInput = await element(by.css('input#field-test-entity-booleanRequiredTom'));
    return await elementInput.isSelected();
  }

  //--------------------------------------------------

  async setEnumTomSelect(enumTom) {
    const elem = await element(by.css('select#field-test-entity-enumTom'));
    await elem.sendKeys(enumTom);
  }

  async getEnumTomSelect() {
    const elem = await element(by.css('select#field-test-entity-enumTom'));
    const elemChecked = await elem.element(by.css('option:checked'));
    return elemChecked.getText();
  }

  async enumTomSelectLastOption() {
    const elem = await element(by.css('select#field-test-entity-enumTom'));
    await elem
      .all(by.tagName('option'))
      .last()
      .click();
  }

  //--------------------------------------------------

  async setEnumRequiredTomSelect(enumRequiredTom) {
    const elem = await element(by.css('select#field-test-entity-enumRequiredTom'));
    await elem.sendKeys(enumRequiredTom);
  }

  async getEnumRequiredTomSelect() {
    const elem = await element(by.css('select#field-test-entity-enumRequiredTom'));
    const elemChecked = await elem.element(by.css('option:checked'));
    return elemChecked.getText();
  }

  async enumRequiredTomSelectLastOption() {
    const elem = await element(by.css('select#field-test-entity-enumRequiredTom'));
    await elem
      .all(by.tagName('option'))
      .last()
      .click();
  }

  //--------------------------------------------------

  async findByteImageTomInput() {
    return await element(by.css('input#file_byteImageTom'));
  }

  async setByteImageTomInput(byteImageTom) {
    const elementInput = await this.findByteImageTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(byteImageTom);
  }

  async getByteImageTomInput() {
    const elementInput = await this.findByteImageTomInput();
    return elementInput.getAttribute('value');
  }

  async clearByteImageTomInput() {
    const elementInput = await this.findByteImageTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findByteImageRequiredTomInput() {
    return await element(by.css('input#file_byteImageRequiredTom'));
  }

  async setByteImageRequiredTomInput(byteImageRequiredTom) {
    const elementInput = await this.findByteImageRequiredTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(byteImageRequiredTom);
  }

  async getByteImageRequiredTomInput() {
    const elementInput = await this.findByteImageRequiredTomInput();
    return elementInput.getAttribute('value');
  }

  async clearByteImageRequiredTomInput() {
    const elementInput = await this.findByteImageRequiredTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findByteImageMinbytesTomInput() {
    return await element(by.css('input#file_byteImageMinbytesTom'));
  }

  async setByteImageMinbytesTomInput(byteImageMinbytesTom) {
    const elementInput = await this.findByteImageMinbytesTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(byteImageMinbytesTom);
  }

  async getByteImageMinbytesTomInput() {
    const elementInput = await this.findByteImageMinbytesTomInput();
    return elementInput.getAttribute('value');
  }

  async clearByteImageMinbytesTomInput() {
    const elementInput = await this.findByteImageMinbytesTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findByteImageMaxbytesTomInput() {
    return await element(by.css('input#file_byteImageMaxbytesTom'));
  }

  async setByteImageMaxbytesTomInput(byteImageMaxbytesTom) {
    const elementInput = await this.findByteImageMaxbytesTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(byteImageMaxbytesTom);
  }

  async getByteImageMaxbytesTomInput() {
    const elementInput = await this.findByteImageMaxbytesTomInput();
    return elementInput.getAttribute('value');
  }

  async clearByteImageMaxbytesTomInput() {
    const elementInput = await this.findByteImageMaxbytesTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findByteAnyTomInput() {
    return await element(by.css('input#file_byteAnyTom'));
  }

  async setByteAnyTomInput(byteAnyTom) {
    const elementInput = await this.findByteAnyTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(byteAnyTom);
  }

  async getByteAnyTomInput() {
    const elementInput = await this.findByteAnyTomInput();
    return elementInput.getAttribute('value');
  }

  async clearByteAnyTomInput() {
    const elementInput = await this.findByteAnyTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findByteAnyRequiredTomInput() {
    return await element(by.css('input#file_byteAnyRequiredTom'));
  }

  async setByteAnyRequiredTomInput(byteAnyRequiredTom) {
    const elementInput = await this.findByteAnyRequiredTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(byteAnyRequiredTom);
  }

  async getByteAnyRequiredTomInput() {
    const elementInput = await this.findByteAnyRequiredTomInput();
    return elementInput.getAttribute('value');
  }

  async clearByteAnyRequiredTomInput() {
    const elementInput = await this.findByteAnyRequiredTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findByteAnyMinbytesTomInput() {
    return await element(by.css('input#file_byteAnyMinbytesTom'));
  }

  async setByteAnyMinbytesTomInput(byteAnyMinbytesTom) {
    const elementInput = await this.findByteAnyMinbytesTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(byteAnyMinbytesTom);
  }

  async getByteAnyMinbytesTomInput() {
    const elementInput = await this.findByteAnyMinbytesTomInput();
    return elementInput.getAttribute('value');
  }

  async clearByteAnyMinbytesTomInput() {
    const elementInput = await this.findByteAnyMinbytesTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findByteAnyMaxbytesTomInput() {
    return await element(by.css('input#file_byteAnyMaxbytesTom'));
  }

  async setByteAnyMaxbytesTomInput(byteAnyMaxbytesTom) {
    const elementInput = await this.findByteAnyMaxbytesTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(byteAnyMaxbytesTom);
  }

  async getByteAnyMaxbytesTomInput() {
    const elementInput = await this.findByteAnyMaxbytesTomInput();
    return elementInput.getAttribute('value');
  }

  async clearByteAnyMaxbytesTomInput() {
    const elementInput = await this.findByteAnyMaxbytesTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findByteTextTomInput() {
    return await element(by.css('textarea#field-test-entity-byteTextTom'));
  }

  async setByteTextTomInput(byteTextTom) {
    const elementInput = await this.findByteTextTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(byteTextTom);
  }

  async getByteTextTomInput() {
    const elementInput = await this.findByteTextTomInput();
    return elementInput.getAttribute('value');
  }

  async clearByteTextTomInput() {
    const elementInput = await this.findByteTextTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findByteTextRequiredTomInput() {
    return await element(by.css('textarea#field-test-entity-byteTextRequiredTom'));
  }

  async setByteTextRequiredTomInput(byteTextRequiredTom) {
    const elementInput = await this.findByteTextRequiredTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(byteTextRequiredTom);
  }

  async getByteTextRequiredTomInput() {
    const elementInput = await this.findByteTextRequiredTomInput();
    return elementInput.getAttribute('value');
  }

  async clearByteTextRequiredTomInput() {
    const elementInput = await this.findByteTextRequiredTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findByteTextMinbytesTomInput() {
    return await element(by.css('textarea#field-test-entity-byteTextMinbytesTom'));
  }

  async setByteTextMinbytesTomInput(byteTextMinbytesTom) {
    const elementInput = await this.findByteTextMinbytesTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(byteTextMinbytesTom);
  }

  async getByteTextMinbytesTomInput() {
    const elementInput = await this.findByteTextMinbytesTomInput();
    return elementInput.getAttribute('value');
  }

  async clearByteTextMinbytesTomInput() {
    const elementInput = await this.findByteTextMinbytesTomInput();
    await clearElement(elementInput, 100);
  }

  //--------------------------------------------------

  async findByteTextMaxbytesTomInput() {
    return await element(by.css('textarea#field-test-entity-byteTextMaxbytesTom'));
  }

  async setByteTextMaxbytesTomInput(byteTextMaxbytesTom) {
    const elementInput = await this.findByteTextMaxbytesTomInput();
    await waitUntilDisplayed(elementInput);
    await elementInput.sendKeys(byteTextMaxbytesTom);
  }

  async getByteTextMaxbytesTomInput() {
    const elementInput = await this.findByteTextMaxbytesTomInput();
    return elementInput.getAttribute('value');
  }

  async clearByteTextMaxbytesTomInput() {
    const elementInput = await this.findByteTextMaxbytesTomInput();
    await clearElement(elementInput, 100);
  }
}
