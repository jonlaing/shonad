[shonad](../README.md) / [Exports](../modules.md) / [monad](../modules/monad.md) / Monad

# Class: Monad<A\>

[monad](../modules/monad.md).Monad

Abstract Monad class. See `Maybe` and `Either` for detailed usage.

**`example`**

export abstract class Maybe<A> extends Monad<A> {
 static pure(a: any) {
   return new Just(a);
 }
}

export class Just<A> extends Maybe<A> {
 isJust = Fn.always(true);
 isNothing = Fn.always(false);

 fmap = <B>(f: (a: A) => B): Maybe<B> => new Just(f(this.val)) as Maybe<B>;
 apply = (ma: Maybe<any>): Maybe<any> => {
   return (
     isJust(ma)
       ? ma.fmap((this as unknown as Just<Function.Function>).val)
       : nothing()
   ) as Maybe<any>;
 };
 bind = (f: (a: any) => Maybe<any>): Maybe<any> => f(this.val);
 unwrap = (fallback: A) => this.val;
 equals = (a: A) => this.fmap(Util.eq(a)).unwrap(false);
}

export class Nothing<A> extends Maybe<A> {
 isJust = Fn.always(false);
 isNothing = Fn.always(true);

 fmap = <B>(f: (a: A) => any): Maybe<B> =>
   new Nothing(this.val as unknown as B);
 apply = (f: Maybe<any>): Maybe<any> => this;
 bind = (f: (a: any) => Maybe<any>) => this;

 unwrap = (fallback: A) => fallback;
 equals = Fn.always(false);
}

**`see`** Functor

**`see`** Applicative

**`see`** Maybe

**`see`** Either

## Type parameters

| Name |
| :------ |
| `A` |

## Hierarchy

- [`Applicative`](applicative.Applicative.md)<`A`\>

  ↳ **`Monad`**

  ↳↳ [`Either`](either.Either.md)

  ↳↳ [`Maybe`](maybe.Maybe.md)

## Implements

- [`IMonad`](../interfaces/monad.IMonad.md)<`A`\>

## Table of contents

### Constructors

- [constructor](monad.Monad.md#constructor)

### Properties

- [apply](monad.Monad.md#apply)
- [bind](monad.Monad.md#bind)
- [fmap](monad.Monad.md#fmap)
- [unwrap](monad.Monad.md#unwrap)
- [val](monad.Monad.md#val)
- [apply](monad.Monad.md#apply-1)
- [bind](monad.Monad.md#bind-1)
- [fmap](monad.Monad.md#fmap-1)

## Constructors

### constructor

• **new Monad**<`A`\>(`val`)

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `A` |

#### Inherited from

[Applicative](applicative.Applicative.md).[constructor](applicative.Applicative.md#constructor)

#### Defined in

[src/base/Typeclass.ts:4](https://github.com/jonlaing/shonad/blob/d73c49f/src/base/Typeclass.ts#L4)

## Properties

### apply

• `Abstract` **apply**: (`f`: `any`) => [`Monad`](monad.Monad.md)<`any`\>

#### Type declaration

▸ (`f`): [`Monad`](monad.Monad.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `any` |

##### Returns

[`Monad`](monad.Monad.md)<`any`\>

#### Implementation of

[IMonad](../interfaces/monad.IMonad.md).[apply](../interfaces/monad.IMonad.md#apply)

#### Overrides

[Applicative](applicative.Applicative.md).[apply](applicative.Applicative.md#apply)

#### Defined in

[src/control/Monad.ts:60](https://github.com/jonlaing/shonad/blob/d73c49f/src/control/Monad.ts#L60)

___

### bind

• `Abstract` **bind**: (`f`: [`Function`](../modules/func.md#function)<`any`, [`Monad`](monad.Monad.md)<`any`\>\>) => [`Monad`](monad.Monad.md)<`any`\>

#### Type declaration

▸ (`f`): [`Monad`](monad.Monad.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Function`](../modules/func.md#function)<`any`, [`Monad`](monad.Monad.md)<`any`\>\> |

##### Returns

[`Monad`](monad.Monad.md)<`any`\>

#### Implementation of

[IMonad](../interfaces/monad.IMonad.md).[bind](../interfaces/monad.IMonad.md#bind)

#### Defined in

[src/control/Monad.ts:61](https://github.com/jonlaing/shonad/blob/d73c49f/src/control/Monad.ts#L61)

___

### fmap

• `Abstract` **fmap**: (`f`: (`a`: `A`) => `any`) => [`Monad`](monad.Monad.md)<`any`\>

#### Type declaration

▸ (`f`): [`Monad`](monad.Monad.md)<`any`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `A`) => `any` |

##### Returns

[`Monad`](monad.Monad.md)<`any`\>

#### Implementation of

[IMonad](../interfaces/monad.IMonad.md).[fmap](../interfaces/monad.IMonad.md#fmap)

#### Overrides

[Applicative](applicative.Applicative.md).[fmap](applicative.Applicative.md#fmap)

#### Defined in

[src/control/Monad.ts:59](https://github.com/jonlaing/shonad/blob/d73c49f/src/control/Monad.ts#L59)

___

### unwrap

• `Abstract` **unwrap**: (`fallback`: `A`) => `A`

#### Type declaration

▸ (`fallback`): `A`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fallback` | `A` |

##### Returns

`A`

#### Implementation of

[IMonad](../interfaces/monad.IMonad.md).[unwrap](../interfaces/monad.IMonad.md#unwrap)

#### Inherited from

[Applicative](applicative.Applicative.md).[unwrap](applicative.Applicative.md#unwrap)

#### Defined in

[src/base/Typeclass.ts:8](https://github.com/jonlaing/shonad/blob/d73c49f/src/base/Typeclass.ts#L8)

___

### val

• **val**: `A`

#### Implementation of

[IMonad](../interfaces/monad.IMonad.md).[val](../interfaces/monad.IMonad.md#val)

#### Inherited from

[Applicative](applicative.Applicative.md).[val](applicative.Applicative.md#val)

#### Defined in

[src/base/Typeclass.ts:2](https://github.com/jonlaing/shonad/blob/d73c49f/src/base/Typeclass.ts#L2)

___

### apply

▪ `Static` **apply**: [`StaticApplyFn`](../modules/applicative.md#staticapplyfn)<[`Monad`](monad.Monad.md)<`Function`<`any`, `any`\>\>, [`Monad`](monad.Monad.md)<`any`\>\>

#### Overrides

[Applicative](applicative.Applicative.md).[apply](applicative.Applicative.md#apply-1)

#### Defined in

[src/control/Monad.ts:57](https://github.com/jonlaing/shonad/blob/d73c49f/src/control/Monad.ts#L57)

___

### bind

▪ `Static` **bind**: `Curry`<(`x`: [`Monad`](monad.Monad.md)<`any`\>, `f`: (`a`: `any`) => [`Monad`](monad.Monad.md)<`any`\>) => [`Monad`](monad.Monad.md)<`any`\>\>

#### Defined in

[src/control/Monad.ts:54](https://github.com/jonlaing/shonad/blob/d73c49f/src/control/Monad.ts#L54)

___

### fmap

▪ `Static` **fmap**: `Curry`<<A, B\>(`f`: (`a`: `A`) => `B`, `x`: [`Functor`](functor.Functor.md)<`A`\>) => [`Functor`](functor.Functor.md)<`any`\>\>

#### Inherited from

[Applicative](applicative.Applicative.md).[fmap](applicative.Applicative.md#fmap-1)

#### Defined in

[src/control/Functor.ts:5](https://github.com/jonlaing/shonad/blob/d73c49f/src/control/Functor.ts#L5)
