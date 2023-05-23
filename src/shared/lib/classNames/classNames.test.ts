import { classNames } from './classNames';

describe('classNames', () => {
    test('With first parameter', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('With additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('With mods true', () => {
        const expected = 'someClass class1 class2 hovered selected';
        expect(classNames(
            'someClass',
            { hovered: true, selected: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('With mods not all true', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, selected: false },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('With mods undefined', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass',
            { hovered: true, selected: undefined },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
