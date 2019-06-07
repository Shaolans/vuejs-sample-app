/* tslint:disable no-unused-expression */
import { browser, protractor, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import FieldTestEntityComponentsPage from './field-test-entity.page-object';
import { FieldTestEntityDeleteDialog } from './field-test-entity.page-object';
import FieldTestEntityUpdatePage from './field-test-entity-update.page-object';
import FieldTestEntityDetailsPage from './field-test-entity-details.page-object';
import { waitUntilDisplayed, waitUntilHidden, getDangerToast, getInfoToast, getSuccessToast } from '../../util/utils';
import path from 'path';

const expect = chai.expect;

describe('FieldTestEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let fieldTestEntityUpdatePage: FieldTestEntityUpdatePage;
  let fieldTestEntityDetailsPage: FieldTestEntityDetailsPage;
  let fieldTestEntityComponentsPage: FieldTestEntityComponentsPage;
  let fieldTestEntityDeleteDialog: FieldTestEntityDeleteDialog;
  const fileToUpload = '../../../../../main/webapp/content/images/logo-jhipster.png';
  const absolutePath = path.resolve(__dirname, fileToUpload);
  let nbButtonsBeforeCreate = 0;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.waitUntilDisplayed();

    await signInPage.username.sendKeys('admin');
    await signInPage.password.sendKeys('admin');
    await signInPage.loginButton.click();
    await signInPage.waitUntilHidden();
    await waitUntilDisplayed(navBarPage.entityMenu);
  });

  it('should load FieldTestEntities', async () => {
    console.log('await navBarPage.getEntityPage');
    await navBarPage.getEntityPage('field-test-entity');
    fieldTestEntityComponentsPage = new FieldTestEntityComponentsPage();
    console.log('getTitle');
    const heading = await fieldTestEntityComponentsPage.getTitle();
    console.log('wait until displayed');
    await waitUntilDisplayed(heading);

    console.log('getFooter');
    const footer = await fieldTestEntityComponentsPage.getFooter();
    console.log('wait until displayed');
    await waitUntilDisplayed(footer);

    console.log('getText not to be empty');
    expect(await heading.getText()).not.to.be.empty;
    console.log('countDeleteButtons');
    nbButtonsBeforeCreate = await fieldTestEntityComponentsPage.countDeleteButtons();
    console.log('nbButtonsBeforeCreate=' + nbButtonsBeforeCreate);

    // Bug-fix with Protractor.
    // force to recalculate in case of value is still 0
    if (nbButtonsBeforeCreate === 0) {
      console.log('countDeleteButtons');
      nbButtonsBeforeCreate = await fieldTestEntityComponentsPage.countDeleteButtons();
      console.log('nbButtonsBeforeCreate=' + nbButtonsBeforeCreate);
      if (nbButtonsBeforeCreate === 0) {
        console.log('countDeleteButtons');
        nbButtonsBeforeCreate = await fieldTestEntityComponentsPage.countDeleteButtons();
        console.log('nbButtonsBeforeCreate=' + nbButtonsBeforeCreate);
      }
    }
  });

  it('should load create FieldTestEntity page', async () => {
    await fieldTestEntityComponentsPage.clickOnCreateButton();
    fieldTestEntityUpdatePage = new FieldTestEntityUpdatePage();

    const heading = await fieldTestEntityUpdatePage.getPageTitle();
    await waitUntilDisplayed(heading);

    const footer = await fieldTestEntityUpdatePage.getFooter();
    await waitUntilDisplayed(footer);

    await waitUntilDisplayed(await fieldTestEntityUpdatePage.getSaveButton());

    expect(await heading.getAttribute('id')).to.match(/jhipsterApp.fieldTestEntity.home.createOrEditLabel/);
  });

  it('should create and save FieldTestEntities', async () => {
    console.log('--> set StringTom');
    await fieldTestEntityUpdatePage.setStringTomInput('stringTom');
    console.log('--> expect StringTom');
    expect(await fieldTestEntityUpdatePage.getStringTomInput()).to.match(/stringTom/);

    console.log('--> set StringRequiredTom');
    await fieldTestEntityUpdatePage.setStringRequiredTomInput('stringRequiredTom');
    console.log('--> expect StringRequiredTom');
    expect(await fieldTestEntityUpdatePage.getStringRequiredTomInput()).to.match(/stringRequiredTom/);

    console.log('--> set StringMinlengthTom');
    await fieldTestEntityUpdatePage.setStringMinlengthTomInput('stringMinlengthTom');
    console.log('--> expect StringMinlengthTom');
    expect(await fieldTestEntityUpdatePage.getStringMinlengthTomInput()).to.match(/stringMinlengthTom/);

    console.log('--> set StringMaxlengthTom');
    await fieldTestEntityUpdatePage.setStringMaxlengthTomInput('stringMaxlengthTom');
    console.log('--> expect StringMaxlengthTom');
    expect(await fieldTestEntityUpdatePage.getStringMaxlengthTomInput()).to.match(/stringMaxlengthTom/);

    console.log('--> set StringPatternTom');
    await fieldTestEntityUpdatePage.setStringPatternTomInput('stringPatternTom');
    console.log('--> expect StringPatternTom');
    expect(await fieldTestEntityUpdatePage.getStringPatternTomInput()).to.match(/stringPatternTom/);

    console.log('--> set IntegerTom');
    await fieldTestEntityUpdatePage.setIntegerTomInput('5');
    console.log('--> expect IntegerTom');
    expect(await fieldTestEntityUpdatePage.getIntegerTomInput()).to.eq('5');

    console.log('--> set IntegerRequiredTom');
    await fieldTestEntityUpdatePage.setIntegerRequiredTomInput('5');
    console.log('--> expect IntegerRequiredTom');
    expect(await fieldTestEntityUpdatePage.getIntegerRequiredTomInput()).to.eq('5');

    console.log('--> set IntegerMinTom');
    await fieldTestEntityUpdatePage.setIntegerMinTomInput('5');
    console.log('--> expect IntegerMinTom');
    expect(await fieldTestEntityUpdatePage.getIntegerMinTomInput()).to.eq('5');

    console.log('--> set IntegerMaxTom');
    await fieldTestEntityUpdatePage.setIntegerMaxTomInput('5');
    console.log('--> expect IntegerMaxTom');
    expect(await fieldTestEntityUpdatePage.getIntegerMaxTomInput()).to.eq('5');

    console.log('--> set LongTom');
    await fieldTestEntityUpdatePage.setLongTomInput('5');
    console.log('--> expect LongTom');
    expect(await fieldTestEntityUpdatePage.getLongTomInput()).to.eq('5');

    console.log('--> set LongRequiredTom');
    await fieldTestEntityUpdatePage.setLongRequiredTomInput('5');
    console.log('--> expect LongRequiredTom');
    expect(await fieldTestEntityUpdatePage.getLongRequiredTomInput()).to.eq('5');

    console.log('--> set LongMinTom');
    await fieldTestEntityUpdatePage.setLongMinTomInput('5');
    console.log('--> expect LongMinTom');
    expect(await fieldTestEntityUpdatePage.getLongMinTomInput()).to.eq('5');

    console.log('--> set LongMaxTom');
    await fieldTestEntityUpdatePage.setLongMaxTomInput('5');
    console.log('--> expect LongMaxTom');
    expect(await fieldTestEntityUpdatePage.getLongMaxTomInput()).to.eq('5');

    console.log('--> set FloatTom');
    await fieldTestEntityUpdatePage.setFloatTomInput('5');
    console.log('--> expect FloatTom');
    expect(await fieldTestEntityUpdatePage.getFloatTomInput()).to.eq('5');

    console.log('--> set FloatRequiredTom');
    await fieldTestEntityUpdatePage.setFloatRequiredTomInput('5');
    console.log('--> expect FloatRequiredTom');
    expect(await fieldTestEntityUpdatePage.getFloatRequiredTomInput()).to.eq('5');

    console.log('--> set FloatMinTom');
    await fieldTestEntityUpdatePage.setFloatMinTomInput('5');
    console.log('--> expect FloatMinTom');
    expect(await fieldTestEntityUpdatePage.getFloatMinTomInput()).to.eq('5');

    console.log('--> set FloatMaxTom');
    await fieldTestEntityUpdatePage.setFloatMaxTomInput('5');
    console.log('--> expect FloatMaxTom');
    expect(await fieldTestEntityUpdatePage.getFloatMaxTomInput()).to.eq('5');

    console.log('--> set DoubleRequiredTom');
    await fieldTestEntityUpdatePage.setDoubleRequiredTomInput('5');
    console.log('--> expect DoubleRequiredTom');
    expect(await fieldTestEntityUpdatePage.getDoubleRequiredTomInput()).to.eq('5');

    console.log('--> set DoubleMinTom');
    await fieldTestEntityUpdatePage.setDoubleMinTomInput('5');
    console.log('--> expect DoubleMinTom');
    expect(await fieldTestEntityUpdatePage.getDoubleMinTomInput()).to.eq('5');

    console.log('--> set DoubleMaxTom');
    await fieldTestEntityUpdatePage.setDoubleMaxTomInput('5');
    console.log('--> expect DoubleMaxTom');
    expect(await fieldTestEntityUpdatePage.getDoubleMaxTomInput()).to.eq('5');

    console.log('--> set BigDecimalRequiredTom');
    await fieldTestEntityUpdatePage.setBigDecimalRequiredTomInput('5');
    console.log('--> expect BigDecimalRequiredTom');
    expect(await fieldTestEntityUpdatePage.getBigDecimalRequiredTomInput()).to.eq('5');

    console.log('--> set BigDecimalMinTom');
    await fieldTestEntityUpdatePage.setBigDecimalMinTomInput('5');
    console.log('--> expect BigDecimalMinTom');
    expect(await fieldTestEntityUpdatePage.getBigDecimalMinTomInput()).to.eq('5');

    console.log('--> set BigDecimalMaxTom');
    await fieldTestEntityUpdatePage.setBigDecimalMaxTomInput('5');
    console.log('--> expect BigDecimalMaxTom');
    expect(await fieldTestEntityUpdatePage.getBigDecimalMaxTomInput()).to.eq('5');

    console.log('--> set LocalDateTom');
    await fieldTestEntityUpdatePage.setLocalDateTomInput('01-01-2001');
    console.log('--> expect LocalDateTom');
    expect(await fieldTestEntityUpdatePage.getLocalDateTomInput()).to.eq('2001-01-01');

    console.log('--> set LocalDateRequiredTom');
    await fieldTestEntityUpdatePage.setLocalDateRequiredTomInput('01-01-2001');
    console.log('--> expect LocalDateRequiredTom');
    expect(await fieldTestEntityUpdatePage.getLocalDateRequiredTomInput()).to.eq('2001-01-01');

    console.log('--> set InstantTom');
    await fieldTestEntityUpdatePage.setInstantTomInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    console.log('--> expect InstantTom');
    expect(await fieldTestEntityUpdatePage.getInstantTomInput()).to.contain('2001-01-01T02:30');

    console.log('--> set InstantRequiredTom');
    await fieldTestEntityUpdatePage.setInstantRequiredTomInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    console.log('--> expect InstantRequiredTom');
    expect(await fieldTestEntityUpdatePage.getInstantRequiredTomInput()).to.contain('2001-01-01T02:30');

    console.log('--> set ZonedDateTimeTom');
    await fieldTestEntityUpdatePage.setZonedDateTimeTomInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    console.log('--> expect ZonedDateTimeTom');
    expect(await fieldTestEntityUpdatePage.getZonedDateTimeTomInput()).to.contain('2001-01-01T02:30');

    console.log('--> set ZonedDateTimeRequiredTom');
    await fieldTestEntityUpdatePage.setZonedDateTimeRequiredTomInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    console.log('--> expect ZonedDateTimeRequiredTom');
    expect(await fieldTestEntityUpdatePage.getZonedDateTimeRequiredTomInput()).to.contain('2001-01-01T02:30');

    console.log('--> set DurationTom');
    await fieldTestEntityUpdatePage.setDurationTomInput('PT12S');
    console.log('--> expect DurationTom');
    expect(await fieldTestEntityUpdatePage.getDurationTomInput()).to.contain('12');

    console.log('--> set DurationRequiredTom');
    await fieldTestEntityUpdatePage.setDurationRequiredTomInput('PT12S');
    console.log('--> expect DurationRequiredTom');
    expect(await fieldTestEntityUpdatePage.getDurationRequiredTomInput()).to.contain('12');

    const selectedBooleanTom = await fieldTestEntityUpdatePage.isSelectedBooleanTomInput();
    if (selectedBooleanTom) {
      await fieldTestEntityUpdatePage.clickBooleanTomInput();
      expect(await fieldTestEntityUpdatePage.isSelectedBooleanTomInput()).to.be.false;
    } else {
      await fieldTestEntityUpdatePage.clickBooleanTomInput();
      expect(await fieldTestEntityUpdatePage.isSelectedBooleanTomInput()).to.be.true;
    }

    const selectedBooleanRequiredTom = await fieldTestEntityUpdatePage.isSelectedBooleanRequiredTomInput();
    if (selectedBooleanRequiredTom) {
      await fieldTestEntityUpdatePage.clickBooleanRequiredTomInput();
      expect(await fieldTestEntityUpdatePage.isSelectedBooleanRequiredTomInput()).to.be.false;
    } else {
      await fieldTestEntityUpdatePage.clickBooleanRequiredTomInput();
      expect(await fieldTestEntityUpdatePage.isSelectedBooleanRequiredTomInput()).to.be.true;
    }

    console.log('--> set enumTom');
    await fieldTestEntityUpdatePage.enumTomSelectLastOption();

    console.log('--> set enumRequiredTom');
    await fieldTestEntityUpdatePage.enumRequiredTomSelectLastOption();

    console.log('--> set ByteImageTom');
    await fieldTestEntityUpdatePage.setByteImageTomInput(absolutePath);

    console.log('--> set ByteImageRequiredTom');
    await fieldTestEntityUpdatePage.setByteImageRequiredTomInput(absolutePath);

    console.log('--> set ByteImageMinbytesTom');
    await fieldTestEntityUpdatePage.setByteImageMinbytesTomInput(absolutePath);

    console.log('--> set ByteImageMaxbytesTom');
    await fieldTestEntityUpdatePage.setByteImageMaxbytesTomInput(absolutePath);

    console.log('--> set ByteAnyTom');
    await fieldTestEntityUpdatePage.setByteAnyTomInput(absolutePath);

    console.log('--> set ByteAnyRequiredTom');
    await fieldTestEntityUpdatePage.setByteAnyRequiredTomInput(absolutePath);

    console.log('--> set ByteAnyMinbytesTom');
    await fieldTestEntityUpdatePage.setByteAnyMinbytesTomInput(absolutePath);

    console.log('--> set ByteAnyMaxbytesTom');
    await fieldTestEntityUpdatePage.setByteAnyMaxbytesTomInput(absolutePath);

    console.log('--> set ByteTextTom');
    await fieldTestEntityUpdatePage.setByteTextTomInput('byteTextTom');
    console.log('--> expect ByteTextTom');
    expect(await fieldTestEntityUpdatePage.getByteTextTomInput()).to.match(/byteTextTom/);

    console.log('--> set ByteTextRequiredTom');
    await fieldTestEntityUpdatePage.setByteTextRequiredTomInput('byteTextRequiredTom');
    console.log('--> expect ByteTextRequiredTom');
    expect(await fieldTestEntityUpdatePage.getByteTextRequiredTomInput()).to.match(/byteTextRequiredTom/);

    console.log('--> set ByteTextMinbytesTom');
    await fieldTestEntityUpdatePage.setByteTextMinbytesTomInput('byteTextMinbytesTom');
    console.log('--> expect ByteTextMinbytesTom');
    expect(await fieldTestEntityUpdatePage.getByteTextMinbytesTomInput()).to.match(/byteTextMinbytesTom/);

    console.log('--> set ByteTextMaxbytesTom');
    await fieldTestEntityUpdatePage.setByteTextMaxbytesTomInput('byteTextMaxbytesTom');
    console.log('--> expect ByteTextMaxbytesTom');
    expect(await fieldTestEntityUpdatePage.getByteTextMaxbytesTomInput()).to.match(/byteTextMaxbytesTom/);

    console.log('click on save');
    await fieldTestEntityUpdatePage.save();
    console.log('wait until save hidden');
    await waitUntilHidden(await fieldTestEntityUpdatePage.getSaveButton());
    console.log('wait save to be false');
    expect(await fieldTestEntityUpdatePage.isSaveButtonPresent()).to.be.false;

    console.log('getSuccessToast');
    const toast = getSuccessToast();
    console.log('await waitUntilDisplayed(toast)');
    await waitUntilDisplayed(toast);
    // Success toast should appear
    console.log('toast is present to be true');
    expect(await toast.isPresent()).to.be.true;

    // console.log('await nbButtonsBeforeCreate');
    // await fieldTestEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    console.log('nbButtonsBeforeCreate=' + nbButtonsBeforeCreate);
    const nbButtonsAfterCreate = await fieldTestEntityComponentsPage.countDeleteButtons();
    console.log('nbButtonsAfterCreate=' + nbButtonsAfterCreate);
    console.log('expect nbButtonsBeforeCreate');
    expect(nbButtonsAfterCreate).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should load details FieldTestEntity page and fetch data', async () => {
    console.log('clickOnLastDetailsButton');
    await fieldTestEntityComponentsPage.clickOnLastDetailsButton();
    fieldTestEntityDetailsPage = new FieldTestEntityDetailsPage();

    console.log('getPageTitle');
    const heading = await fieldTestEntityDetailsPage.getPageTitle();
    await waitUntilDisplayed(heading);

    console.log('getFooter');
    const footer = await fieldTestEntityUpdatePage.getFooter();
    await waitUntilDisplayed(footer);

    console.log('getBackButton');
    await waitUntilDisplayed(await fieldTestEntityDetailsPage.getBackButton());
    expect(await heading.getText()).not.to.be.empty;

    console.log('firstDetail');
    const firstDetail = fieldTestEntityDetailsPage.getBackButton();
    expect(await firstDetail.getText()).not.to.be.empty;

    await fieldTestEntityDetailsPage.getBackButton().click();
    await fieldTestEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
  });

  it('should load edit FieldTestEntity page and fetch data', async () => {
    await fieldTestEntityComponentsPage.clickOnLastEditButton();
    const heading = await fieldTestEntityUpdatePage.getPageTitle();
    await waitUntilDisplayed(heading);

    const footer = await fieldTestEntityUpdatePage.getFooter();
    await waitUntilDisplayed(footer);

    await waitUntilDisplayed(await fieldTestEntityUpdatePage.getSaveButton());

    expect(await heading.getText()).not.to.be.empty;

    await fieldTestEntityUpdatePage.clearStringTomInput();
    await fieldTestEntityUpdatePage.setStringTomInput('modified');
    expect(await fieldTestEntityUpdatePage.getStringTomInput()).to.match(/modified/);

    await fieldTestEntityUpdatePage.clearStringRequiredTomInput();
    await fieldTestEntityUpdatePage.setStringRequiredTomInput('modified');
    expect(await fieldTestEntityUpdatePage.getStringRequiredTomInput()).to.match(/modified/);

    await fieldTestEntityUpdatePage.clearStringMinlengthTomInput();
    await fieldTestEntityUpdatePage.setStringMinlengthTomInput('modified');
    expect(await fieldTestEntityUpdatePage.getStringMinlengthTomInput()).to.match(/modified/);

    await fieldTestEntityUpdatePage.clearStringMaxlengthTomInput();
    await fieldTestEntityUpdatePage.setStringMaxlengthTomInput('modified');
    expect(await fieldTestEntityUpdatePage.getStringMaxlengthTomInput()).to.match(/modified/);

    await fieldTestEntityUpdatePage.clearStringPatternTomInput();
    await fieldTestEntityUpdatePage.setStringPatternTomInput('modified');
    expect(await fieldTestEntityUpdatePage.getStringPatternTomInput()).to.match(/modified/);

    await fieldTestEntityUpdatePage.clearIntegerTomInput();
    await fieldTestEntityUpdatePage.setIntegerTomInput('6');
    expect(await fieldTestEntityUpdatePage.getIntegerTomInput()).to.eq('6');

    await fieldTestEntityUpdatePage.clearIntegerRequiredTomInput();
    await fieldTestEntityUpdatePage.setIntegerRequiredTomInput('6');
    expect(await fieldTestEntityUpdatePage.getIntegerRequiredTomInput()).to.eq('6');

    await fieldTestEntityUpdatePage.clearIntegerMinTomInput();
    await fieldTestEntityUpdatePage.setIntegerMinTomInput('6');
    expect(await fieldTestEntityUpdatePage.getIntegerMinTomInput()).to.eq('6');

    await fieldTestEntityUpdatePage.clearIntegerMaxTomInput();
    await fieldTestEntityUpdatePage.setIntegerMaxTomInput('6');
    expect(await fieldTestEntityUpdatePage.getIntegerMaxTomInput()).to.eq('6');

    await fieldTestEntityUpdatePage.clearLongTomInput();
    await fieldTestEntityUpdatePage.setLongTomInput('6');
    expect(await fieldTestEntityUpdatePage.getLongTomInput()).to.eq('6');

    await fieldTestEntityUpdatePage.clearLongRequiredTomInput();
    await fieldTestEntityUpdatePage.setLongRequiredTomInput('6');
    expect(await fieldTestEntityUpdatePage.getLongRequiredTomInput()).to.eq('6');

    await fieldTestEntityUpdatePage.clearLongMinTomInput();
    await fieldTestEntityUpdatePage.setLongMinTomInput('6');
    expect(await fieldTestEntityUpdatePage.getLongMinTomInput()).to.eq('6');

    await fieldTestEntityUpdatePage.clearLongMaxTomInput();
    await fieldTestEntityUpdatePage.setLongMaxTomInput('6');
    expect(await fieldTestEntityUpdatePage.getLongMaxTomInput()).to.eq('6');

    await fieldTestEntityUpdatePage.clearFloatTomInput();
    await fieldTestEntityUpdatePage.setFloatTomInput('6');
    expect(await fieldTestEntityUpdatePage.getFloatTomInput()).to.eq('6');

    await fieldTestEntityUpdatePage.clearFloatRequiredTomInput();
    await fieldTestEntityUpdatePage.setFloatRequiredTomInput('6');
    expect(await fieldTestEntityUpdatePage.getFloatRequiredTomInput()).to.eq('6');

    await fieldTestEntityUpdatePage.clearFloatMinTomInput();
    await fieldTestEntityUpdatePage.setFloatMinTomInput('6');
    expect(await fieldTestEntityUpdatePage.getFloatMinTomInput()).to.eq('6');

    await fieldTestEntityUpdatePage.clearFloatMaxTomInput();
    await fieldTestEntityUpdatePage.setFloatMaxTomInput('6');
    expect(await fieldTestEntityUpdatePage.getFloatMaxTomInput()).to.eq('6');

    await fieldTestEntityUpdatePage.clearDoubleRequiredTomInput();
    await fieldTestEntityUpdatePage.setDoubleRequiredTomInput('6');
    expect(await fieldTestEntityUpdatePage.getDoubleRequiredTomInput()).to.eq('6');

    await fieldTestEntityUpdatePage.clearDoubleMinTomInput();
    await fieldTestEntityUpdatePage.setDoubleMinTomInput('6');
    expect(await fieldTestEntityUpdatePage.getDoubleMinTomInput()).to.eq('6');

    await fieldTestEntityUpdatePage.clearDoubleMaxTomInput();
    await fieldTestEntityUpdatePage.setDoubleMaxTomInput('6');
    expect(await fieldTestEntityUpdatePage.getDoubleMaxTomInput()).to.eq('6');

    await fieldTestEntityUpdatePage.clearBigDecimalRequiredTomInput();
    await fieldTestEntityUpdatePage.setBigDecimalRequiredTomInput('6');
    expect(await fieldTestEntityUpdatePage.getBigDecimalRequiredTomInput()).to.eq('6');

    await fieldTestEntityUpdatePage.clearBigDecimalMinTomInput();
    await fieldTestEntityUpdatePage.setBigDecimalMinTomInput('6');
    expect(await fieldTestEntityUpdatePage.getBigDecimalMinTomInput()).to.eq('6');

    await fieldTestEntityUpdatePage.clearBigDecimalMaxTomInput();
    await fieldTestEntityUpdatePage.setBigDecimalMaxTomInput('6');
    expect(await fieldTestEntityUpdatePage.getBigDecimalMaxTomInput()).to.eq('6');

    await fieldTestEntityUpdatePage.clearLocalDateTomInput();
    await fieldTestEntityUpdatePage.setLocalDateTomInput('01-01-2019');
    expect(await fieldTestEntityUpdatePage.getLocalDateTomInput()).to.eq('2019-01-01');

    await fieldTestEntityUpdatePage.clearLocalDateRequiredTomInput();
    await fieldTestEntityUpdatePage.setLocalDateRequiredTomInput('01-01-2019');
    expect(await fieldTestEntityUpdatePage.getLocalDateRequiredTomInput()).to.eq('2019-01-01');

    await fieldTestEntityUpdatePage.clearInstantTomInput();
    await fieldTestEntityUpdatePage.setInstantTomInput('01/01/2019' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestEntityUpdatePage.getInstantTomInput()).to.contain('2019-01-01T02:30');

    await fieldTestEntityUpdatePage.clearInstantRequiredTomInput();
    await fieldTestEntityUpdatePage.setInstantRequiredTomInput('01/01/2019' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestEntityUpdatePage.getInstantRequiredTomInput()).to.contain('2019-01-01T02:30');

    await fieldTestEntityUpdatePage.clearZonedDateTimeTomInput();
    await fieldTestEntityUpdatePage.setZonedDateTimeTomInput('01/01/2019' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestEntityUpdatePage.getZonedDateTimeTomInput()).to.contain('2019-01-01T02:30');

    await fieldTestEntityUpdatePage.clearZonedDateTimeRequiredTomInput();
    await fieldTestEntityUpdatePage.setZonedDateTimeRequiredTomInput('01/01/2019' + protractor.Key.TAB + '02:30AM');
    expect(await fieldTestEntityUpdatePage.getZonedDateTimeRequiredTomInput()).to.contain('2019-01-01T02:30');

    await fieldTestEntityUpdatePage.clearDurationTomInput();
    await fieldTestEntityUpdatePage.setDurationTomInput('PT14S');
    expect(await fieldTestEntityUpdatePage.getDurationTomInput()).to.contain('14');

    await fieldTestEntityUpdatePage.clearDurationRequiredTomInput();
    await fieldTestEntityUpdatePage.setDurationRequiredTomInput('PT14S');
    expect(await fieldTestEntityUpdatePage.getDurationRequiredTomInput()).to.contain('14');

    const selectedBooleanTom = await fieldTestEntityUpdatePage.isSelectedBooleanTomInput();
    if (selectedBooleanTom) {
      await fieldTestEntityUpdatePage.clickBooleanTomInput();
      expect(await fieldTestEntityUpdatePage.isSelectedBooleanTomInput()).to.be.false;
    } else {
      await fieldTestEntityUpdatePage.clickBooleanTomInput();
      expect(await fieldTestEntityUpdatePage.isSelectedBooleanTomInput()).to.be.true;
    }

    const selectedBooleanRequiredTom = await fieldTestEntityUpdatePage.isSelectedBooleanRequiredTomInput();
    if (selectedBooleanRequiredTom) {
      await fieldTestEntityUpdatePage.clickBooleanRequiredTomInput();
      expect(await fieldTestEntityUpdatePage.isSelectedBooleanRequiredTomInput()).to.be.false;
    } else {
      await fieldTestEntityUpdatePage.clickBooleanRequiredTomInput();
      expect(await fieldTestEntityUpdatePage.isSelectedBooleanRequiredTomInput()).to.be.true;
    }

    await fieldTestEntityUpdatePage.clearByteTextTomInput();
    await fieldTestEntityUpdatePage.setByteTextTomInput('updatedbyteTextTom');
    expect(await fieldTestEntityUpdatePage.getByteTextTomInput()).to.match(/updatedbyteTextTom/);

    await fieldTestEntityUpdatePage.clearByteTextRequiredTomInput();
    await fieldTestEntityUpdatePage.setByteTextRequiredTomInput('updatedbyteTextRequiredTom');
    expect(await fieldTestEntityUpdatePage.getByteTextRequiredTomInput()).to.match(/updatedbyteTextRequiredTom/);

    await fieldTestEntityUpdatePage.clearByteTextMinbytesTomInput();
    await fieldTestEntityUpdatePage.setByteTextMinbytesTomInput('updatedbyteTextMinbytesTom');
    expect(await fieldTestEntityUpdatePage.getByteTextMinbytesTomInput()).to.match(/updatedbyteTextMinbytesTom/);

    await fieldTestEntityUpdatePage.clearByteTextMaxbytesTomInput();
    await fieldTestEntityUpdatePage.setByteTextMaxbytesTomInput('updatedbyteTextMaxbytesTom');
    expect(await fieldTestEntityUpdatePage.getByteTextMaxbytesTomInput()).to.match(/updatedbyteTextMaxbytesTom/);

    await fieldTestEntityUpdatePage.save();

    await waitUntilHidden(await fieldTestEntityUpdatePage.getSaveButton());

    expect(await fieldTestEntityUpdatePage.isSaveButtonPresent()).to.be.false;

    const toast = getInfoToast();
    await waitUntilDisplayed(toast);
    // Info toast should appear
    expect(await toast.isPresent()).to.be.true;
  });

  it('should delete last FieldTestEntity', async () => {
    await fieldTestEntityComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await fieldTestEntityComponentsPage.countDeleteButtons();
    await fieldTestEntityComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);
    fieldTestEntityDeleteDialog = new FieldTestEntityDeleteDialog();
    expect(await fieldTestEntityDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/jhipsterApp.fieldTestEntity.delete.question/);

    await fieldTestEntityDeleteDialog.clickOnConfirmButton();
    await waitUntilHidden(deleteModal);

    // Delete modal should disappear
    expect(await deleteModal.isDisplayed()).to.be.false;
    expect(await fieldTestEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);

    const toast = getDangerToast();

    // Danger toast should appear
    expect(await toast.isPresent()).to.be.true;
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
