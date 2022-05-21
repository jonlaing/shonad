[shonad](../README.md) / [Exports](../modules.md) / [func](../modules/func.md) / Rec

# Class: Rec<T\>

[func](../modules/func.md).Rec

Helper class to perform tail recursive calls. It's really only
exported to assist with typing.

**`see`** [rec](../modules/func.md#rec)

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](func.Rec.md#constructor)

### Properties

- [f](func.Rec.md#f)

### Methods

- [run](func.Rec.md#run)

## Constructors

### constructor

• **new Rec**<`T`\>(`f`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `T` |

#### Defined in

[src/base/Function.ts:290](https://github.com/jonlaing/shonad/blob/eb3a480/src/base/Function.ts#L290)

## Properties

### f

• **f**: () => `any`

#### Type declaration

▸ (): `any`

##### Returns

`any`

#### Defined in

[src/base/Function.ts:289](https://github.com/jonlaing/shonad/blob/eb3a480/src/base/Function.ts#L289)

## Methods

### run

▸ **run**(): `T`

#### Returns

`T`

#### Defined in

[src/base/Function.ts:294](https://github.com/jonlaing/shonad/blob/eb3a480/src/base/Function.ts#L294)
