import { expect, fixture, waitUntil } from '@open-wc/testing';
import { html } from 'lit';
import { sendKeys } from '@web/test-runner-commands';
import sinon from 'sinon';
import type LynkMenu from './menu';
import type LynkMenuItem from '../menu-item/menu-item';

interface Payload {
  item: LynkMenuItem;
}

const createTestMenu = (): Promise<LynkMenu> => {
  return fixture<LynkMenu>(html`
    <lynk-menu>
      <lynk-menu-item value="test1">test1</lynk-menu-item>
      <lynk-menu-item value="test2">test2</lynk-menu-item>
      <lynk-menu-item value="test3">test3</lynk-menu-item>
      <lynk-menu-item value="testDisabled" disabled>testDisabled</lynk-menu-item>
    </lynk-menu>
  `);
};

const clickOnItemWithValue = (menu: LynkMenu, value: string) => {
  const clickedItem = menu.querySelector(`[value=${value}]`);
  if (clickedItem) {
    (clickedItem as LynkMenuItem).click();
  }
};

const spyOnSelectHandler = (menu: LynkMenu): sinon.SinonSpy => {
  const selectHandler = sinon.spy();
  menu.addEventListener('on:select', selectHandler);
  return selectHandler;
};

const expectSelectHandlerToHaveBeenCalledOn = async (
  selectHandler: sinon.SinonSpy,
  expectedValue: string
): Promise<void> => {
  await waitUntil(() => selectHandler.called);
  expect(selectHandler).to.have.been.calledOnce;
  const event = selectHandler.args[0][0] as CustomEvent;
  const detail = event.detail as Payload;
  expect(detail.item.value).to.equal(expectedValue);
};

describe('<lynk-menu>', () => {
  it('emits on:select on click of an item returning the selected item as payload', async () => {
    const menu = await createTestMenu();
    const selectHandler = spyOnSelectHandler(menu);

    clickOnItemWithValue(menu, 'test1');

    await expectSelectHandlerToHaveBeenCalledOn(selectHandler, 'test1');
  });

  it('can be selected via keyboard', async () => {
    const menu = await createTestMenu();
    const selectHandler = spyOnSelectHandler(menu);

    await sendKeys({ press: 'Tab' });
    await sendKeys({ press: 'ArrowDown' });
    await sendKeys({ press: 'Enter' });

    await expectSelectHandlerToHaveBeenCalledOn(selectHandler, 'test2');
  });

  it('does not select disabled items', async () => {
    const menu = await createTestMenu();
    const selectHandler = spyOnSelectHandler(menu);

    await sendKeys({ press: 'Tab' });
    await sendKeys({ type: 'testDisabled' });
    await sendKeys({ press: 'Enter' });

    await expectSelectHandlerToHaveBeenCalledOn(selectHandler, 'test1');
  });
});
