
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AIPromptConfig
 * 
 */
export type AIPromptConfig = $Result.DefaultSelection<Prisma.$AIPromptConfigPayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model Config
 * 
 */
export type Config = $Result.DefaultSelection<Prisma.$ConfigPayload>
/**
 * Model DocsLink
 * 
 */
export type DocsLink = $Result.DefaultSelection<Prisma.$DocsLinkPayload>
/**
 * Model Industry
 * 
 */
export type Industry = $Result.DefaultSelection<Prisma.$IndustryPayload>
/**
 * Model Lead
 * 
 */
export type Lead = $Result.DefaultSelection<Prisma.$LeadPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model MediaPost
 * 
 */
export type MediaPost = $Result.DefaultSelection<Prisma.$MediaPostPayload>
/**
 * Model Meeting
 * 
 */
export type Meeting = $Result.DefaultSelection<Prisma.$MeetingPayload>
/**
 * Model OutreachMessage
 * 
 */
export type OutreachMessage = $Result.DefaultSelection<Prisma.$OutreachMessagePayload>
/**
 * Model ScrapingJob
 * 
 */
export type ScrapingJob = $Result.DefaultSelection<Prisma.$ScrapingJobPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ERole: {
  Admin: 'Admin',
  User: 'User'
};

export type ERole = (typeof ERole)[keyof typeof ERole]


export const EPlatform: {
  Facebook: 'Facebook',
  Instagram: 'Instagram',
  LinkedIn: 'LinkedIn',
  Indeed: 'Indeed',
  Twitter: 'Twitter',
  TikTok: 'TikTok',
  YouTube: 'YouTube',
  GoogleMaps: 'GoogleMaps'
};

export type EPlatform = (typeof EPlatform)[keyof typeof EPlatform]


export const ELeadStatus: {
  New: 'New',
  Running: 'Running',
  Completed: 'Completed',
  Contacted: 'Contacted',
  Interested: 'Interested',
  NotInterested: 'NotInterested',
  Scheduled: 'Scheduled',
  Converted: 'Converted'
};

export type ELeadStatus = (typeof ELeadStatus)[keyof typeof ELeadStatus]


export const EOutreachType: {
  Email: 'Email',
  InstagramDM: 'InstagramDM',
  FacebookDM: 'FacebookDM'
};

export type EOutreachType = (typeof EOutreachType)[keyof typeof EOutreachType]


export const EReplyStatus: {
  NoReply: 'NoReply',
  Interested: 'Interested',
  NotInterested: 'NotInterested',
  Neutral: 'Neutral'
};

export type EReplyStatus = (typeof EReplyStatus)[keyof typeof EReplyStatus]


export const ECampaignStatus: {
  Draft: 'Draft',
  Active: 'Active',
  Paused: 'Paused',
  Completed: 'Completed'
};

export type ECampaignStatus = (typeof ECampaignStatus)[keyof typeof ECampaignStatus]


export const EScrapingJobStatus: {
  Pending: 'Pending',
  Running: 'Running',
  Completed: 'Completed',
  Failed: 'Failed'
};

export type EScrapingJobStatus = (typeof EScrapingJobStatus)[keyof typeof EScrapingJobStatus]


export const EMeetingStatus: {
  Scheduled: 'Scheduled',
  Completed: 'Completed',
  Cancelled: 'Cancelled',
  NoShow: 'NoShow'
};

export type EMeetingStatus = (typeof EMeetingStatus)[keyof typeof EMeetingStatus]


export const EMessageSender: {
  Admin: 'Admin',
  Lead: 'Lead'
};

export type EMessageSender = (typeof EMessageSender)[keyof typeof EMessageSender]


export const EMediaPostStatus: {
  Posted: 'Posted',
  Draft: 'Draft'
};

export type EMediaPostStatus = (typeof EMediaPostStatus)[keyof typeof EMediaPostStatus]

}

export type ERole = $Enums.ERole

export const ERole: typeof $Enums.ERole

export type EPlatform = $Enums.EPlatform

export const EPlatform: typeof $Enums.EPlatform

export type ELeadStatus = $Enums.ELeadStatus

export const ELeadStatus: typeof $Enums.ELeadStatus

export type EOutreachType = $Enums.EOutreachType

export const EOutreachType: typeof $Enums.EOutreachType

export type EReplyStatus = $Enums.EReplyStatus

export const EReplyStatus: typeof $Enums.EReplyStatus

export type ECampaignStatus = $Enums.ECampaignStatus

export const ECampaignStatus: typeof $Enums.ECampaignStatus

export type EScrapingJobStatus = $Enums.EScrapingJobStatus

export const EScrapingJobStatus: typeof $Enums.EScrapingJobStatus

export type EMeetingStatus = $Enums.EMeetingStatus

export const EMeetingStatus: typeof $Enums.EMeetingStatus

export type EMessageSender = $Enums.EMessageSender

export const EMessageSender: typeof $Enums.EMessageSender

export type EMediaPostStatus = $Enums.EMediaPostStatus

export const EMediaPostStatus: typeof $Enums.EMediaPostStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more AIPromptConfigs
 * const aIPromptConfigs = await prisma.aIPromptConfig.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more AIPromptConfigs
   * const aIPromptConfigs = await prisma.aIPromptConfig.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.aIPromptConfig`: Exposes CRUD operations for the **AIPromptConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIPromptConfigs
    * const aIPromptConfigs = await prisma.aIPromptConfig.findMany()
    * ```
    */
  get aIPromptConfig(): Prisma.AIPromptConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.config`: Exposes CRUD operations for the **Config** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configs
    * const configs = await prisma.config.findMany()
    * ```
    */
  get config(): Prisma.ConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.docsLink`: Exposes CRUD operations for the **DocsLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocsLinks
    * const docsLinks = await prisma.docsLink.findMany()
    * ```
    */
  get docsLink(): Prisma.DocsLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.industry`: Exposes CRUD operations for the **Industry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Industries
    * const industries = await prisma.industry.findMany()
    * ```
    */
  get industry(): Prisma.IndustryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lead`: Exposes CRUD operations for the **Lead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.lead.findMany()
    * ```
    */
  get lead(): Prisma.LeadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mediaPost`: Exposes CRUD operations for the **MediaPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaPosts
    * const mediaPosts = await prisma.mediaPost.findMany()
    * ```
    */
  get mediaPost(): Prisma.MediaPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meeting`: Exposes CRUD operations for the **Meeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetings
    * const meetings = await prisma.meeting.findMany()
    * ```
    */
  get meeting(): Prisma.MeetingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outreachMessage`: Exposes CRUD operations for the **OutreachMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutreachMessages
    * const outreachMessages = await prisma.outreachMessage.findMany()
    * ```
    */
  get outreachMessage(): Prisma.OutreachMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scrapingJob`: Exposes CRUD operations for the **ScrapingJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScrapingJobs
    * const scrapingJobs = await prisma.scrapingJob.findMany()
    * ```
    */
  get scrapingJob(): Prisma.ScrapingJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AIPromptConfig: 'AIPromptConfig',
    Campaign: 'Campaign',
    Config: 'Config',
    DocsLink: 'DocsLink',
    Industry: 'Industry',
    Lead: 'Lead',
    Location: 'Location',
    MediaPost: 'MediaPost',
    Meeting: 'Meeting',
    OutreachMessage: 'OutreachMessage',
    ScrapingJob: 'ScrapingJob',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "aIPromptConfig" | "campaign" | "config" | "docsLink" | "industry" | "lead" | "location" | "mediaPost" | "meeting" | "outreachMessage" | "scrapingJob" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AIPromptConfig: {
        payload: Prisma.$AIPromptConfigPayload<ExtArgs>
        fields: Prisma.AIPromptConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIPromptConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPromptConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIPromptConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPromptConfigPayload>
          }
          findFirst: {
            args: Prisma.AIPromptConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPromptConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIPromptConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPromptConfigPayload>
          }
          findMany: {
            args: Prisma.AIPromptConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPromptConfigPayload>[]
          }
          create: {
            args: Prisma.AIPromptConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPromptConfigPayload>
          }
          createMany: {
            args: Prisma.AIPromptConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIPromptConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPromptConfigPayload>[]
          }
          delete: {
            args: Prisma.AIPromptConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPromptConfigPayload>
          }
          update: {
            args: Prisma.AIPromptConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPromptConfigPayload>
          }
          deleteMany: {
            args: Prisma.AIPromptConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIPromptConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIPromptConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPromptConfigPayload>[]
          }
          upsert: {
            args: Prisma.AIPromptConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPromptConfigPayload>
          }
          aggregate: {
            args: Prisma.AIPromptConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIPromptConfig>
          }
          groupBy: {
            args: Prisma.AIPromptConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIPromptConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIPromptConfigCountArgs<ExtArgs>
            result: $Utils.Optional<AIPromptConfigCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      Config: {
        payload: Prisma.$ConfigPayload<ExtArgs>
        fields: Prisma.ConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          findFirst: {
            args: Prisma.ConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          findMany: {
            args: Prisma.ConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>[]
          }
          create: {
            args: Prisma.ConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          createMany: {
            args: Prisma.ConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>[]
          }
          delete: {
            args: Prisma.ConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          update: {
            args: Prisma.ConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          deleteMany: {
            args: Prisma.ConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>[]
          }
          upsert: {
            args: Prisma.ConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          aggregate: {
            args: Prisma.ConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfig>
          }
          groupBy: {
            args: Prisma.ConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfigCountArgs<ExtArgs>
            result: $Utils.Optional<ConfigCountAggregateOutputType> | number
          }
        }
      }
      DocsLink: {
        payload: Prisma.$DocsLinkPayload<ExtArgs>
        fields: Prisma.DocsLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocsLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocsLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocsLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocsLinkPayload>
          }
          findFirst: {
            args: Prisma.DocsLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocsLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocsLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocsLinkPayload>
          }
          findMany: {
            args: Prisma.DocsLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocsLinkPayload>[]
          }
          create: {
            args: Prisma.DocsLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocsLinkPayload>
          }
          createMany: {
            args: Prisma.DocsLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocsLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocsLinkPayload>[]
          }
          delete: {
            args: Prisma.DocsLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocsLinkPayload>
          }
          update: {
            args: Prisma.DocsLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocsLinkPayload>
          }
          deleteMany: {
            args: Prisma.DocsLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocsLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocsLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocsLinkPayload>[]
          }
          upsert: {
            args: Prisma.DocsLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocsLinkPayload>
          }
          aggregate: {
            args: Prisma.DocsLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocsLink>
          }
          groupBy: {
            args: Prisma.DocsLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocsLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocsLinkCountArgs<ExtArgs>
            result: $Utils.Optional<DocsLinkCountAggregateOutputType> | number
          }
        }
      }
      Industry: {
        payload: Prisma.$IndustryPayload<ExtArgs>
        fields: Prisma.IndustryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IndustryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IndustryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>
          }
          findFirst: {
            args: Prisma.IndustryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IndustryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>
          }
          findMany: {
            args: Prisma.IndustryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>[]
          }
          create: {
            args: Prisma.IndustryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>
          }
          createMany: {
            args: Prisma.IndustryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IndustryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>[]
          }
          delete: {
            args: Prisma.IndustryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>
          }
          update: {
            args: Prisma.IndustryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>
          }
          deleteMany: {
            args: Prisma.IndustryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IndustryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IndustryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>[]
          }
          upsert: {
            args: Prisma.IndustryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IndustryPayload>
          }
          aggregate: {
            args: Prisma.IndustryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndustry>
          }
          groupBy: {
            args: Prisma.IndustryGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndustryGroupByOutputType>[]
          }
          count: {
            args: Prisma.IndustryCountArgs<ExtArgs>
            result: $Utils.Optional<IndustryCountAggregateOutputType> | number
          }
        }
      }
      Lead: {
        payload: Prisma.$LeadPayload<ExtArgs>
        fields: Prisma.LeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findFirst: {
            args: Prisma.LeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findMany: {
            args: Prisma.LeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          create: {
            args: Prisma.LeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          createMany: {
            args: Prisma.LeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          delete: {
            args: Prisma.LeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          update: {
            args: Prisma.LeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          deleteMany: {
            args: Prisma.LeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          upsert: {
            args: Prisma.LeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          aggregate: {
            args: Prisma.LeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLead>
          }
          groupBy: {
            args: Prisma.LeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadCountArgs<ExtArgs>
            result: $Utils.Optional<LeadCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      MediaPost: {
        payload: Prisma.$MediaPostPayload<ExtArgs>
        fields: Prisma.MediaPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPostPayload>
          }
          findFirst: {
            args: Prisma.MediaPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPostPayload>
          }
          findMany: {
            args: Prisma.MediaPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPostPayload>[]
          }
          create: {
            args: Prisma.MediaPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPostPayload>
          }
          createMany: {
            args: Prisma.MediaPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPostPayload>[]
          }
          delete: {
            args: Prisma.MediaPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPostPayload>
          }
          update: {
            args: Prisma.MediaPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPostPayload>
          }
          deleteMany: {
            args: Prisma.MediaPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPostPayload>[]
          }
          upsert: {
            args: Prisma.MediaPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPostPayload>
          }
          aggregate: {
            args: Prisma.MediaPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaPost>
          }
          groupBy: {
            args: Prisma.MediaPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaPostCountArgs<ExtArgs>
            result: $Utils.Optional<MediaPostCountAggregateOutputType> | number
          }
        }
      }
      Meeting: {
        payload: Prisma.$MeetingPayload<ExtArgs>
        fields: Prisma.MeetingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findFirst: {
            args: Prisma.MeetingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findMany: {
            args: Prisma.MeetingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          create: {
            args: Prisma.MeetingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          createMany: {
            args: Prisma.MeetingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          delete: {
            args: Prisma.MeetingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          update: {
            args: Prisma.MeetingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          deleteMany: {
            args: Prisma.MeetingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeetingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          upsert: {
            args: Prisma.MeetingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          aggregate: {
            args: Prisma.MeetingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeeting>
          }
          groupBy: {
            args: Prisma.MeetingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingCountAggregateOutputType> | number
          }
        }
      }
      OutreachMessage: {
        payload: Prisma.$OutreachMessagePayload<ExtArgs>
        fields: Prisma.OutreachMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutreachMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutreachMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutreachMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutreachMessagePayload>
          }
          findFirst: {
            args: Prisma.OutreachMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutreachMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutreachMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutreachMessagePayload>
          }
          findMany: {
            args: Prisma.OutreachMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutreachMessagePayload>[]
          }
          create: {
            args: Prisma.OutreachMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutreachMessagePayload>
          }
          createMany: {
            args: Prisma.OutreachMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutreachMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutreachMessagePayload>[]
          }
          delete: {
            args: Prisma.OutreachMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutreachMessagePayload>
          }
          update: {
            args: Prisma.OutreachMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutreachMessagePayload>
          }
          deleteMany: {
            args: Prisma.OutreachMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutreachMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutreachMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutreachMessagePayload>[]
          }
          upsert: {
            args: Prisma.OutreachMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutreachMessagePayload>
          }
          aggregate: {
            args: Prisma.OutreachMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutreachMessage>
          }
          groupBy: {
            args: Prisma.OutreachMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutreachMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutreachMessageCountArgs<ExtArgs>
            result: $Utils.Optional<OutreachMessageCountAggregateOutputType> | number
          }
        }
      }
      ScrapingJob: {
        payload: Prisma.$ScrapingJobPayload<ExtArgs>
        fields: Prisma.ScrapingJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScrapingJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapingJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScrapingJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapingJobPayload>
          }
          findFirst: {
            args: Prisma.ScrapingJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapingJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScrapingJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapingJobPayload>
          }
          findMany: {
            args: Prisma.ScrapingJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapingJobPayload>[]
          }
          create: {
            args: Prisma.ScrapingJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapingJobPayload>
          }
          createMany: {
            args: Prisma.ScrapingJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScrapingJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapingJobPayload>[]
          }
          delete: {
            args: Prisma.ScrapingJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapingJobPayload>
          }
          update: {
            args: Prisma.ScrapingJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapingJobPayload>
          }
          deleteMany: {
            args: Prisma.ScrapingJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScrapingJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScrapingJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapingJobPayload>[]
          }
          upsert: {
            args: Prisma.ScrapingJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapingJobPayload>
          }
          aggregate: {
            args: Prisma.ScrapingJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScrapingJob>
          }
          groupBy: {
            args: Prisma.ScrapingJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScrapingJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScrapingJobCountArgs<ExtArgs>
            result: $Utils.Optional<ScrapingJobCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    aIPromptConfig?: AIPromptConfigOmit
    campaign?: CampaignOmit
    config?: ConfigOmit
    docsLink?: DocsLinkOmit
    industry?: IndustryOmit
    lead?: LeadOmit
    location?: LocationOmit
    mediaPost?: MediaPostOmit
    meeting?: MeetingOmit
    outreachMessage?: OutreachMessageOmit
    scrapingJob?: ScrapingJobOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    leads: number
    outreachMessages: number
    scrapingJobs: number
    meetings: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | CampaignCountOutputTypeCountLeadsArgs
    outreachMessages?: boolean | CampaignCountOutputTypeCountOutreachMessagesArgs
    scrapingJobs?: boolean | CampaignCountOutputTypeCountScrapingJobsArgs
    meetings?: boolean | CampaignCountOutputTypeCountMeetingsArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountOutreachMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutreachMessageWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountScrapingJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScrapingJobWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
  }


  /**
   * Count Type DocsLinkCountOutputType
   */

  export type DocsLinkCountOutputType = {
    posts: number
  }

  export type DocsLinkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | DocsLinkCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * DocsLinkCountOutputType without action
   */
  export type DocsLinkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocsLinkCountOutputType
     */
    select?: DocsLinkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocsLinkCountOutputType without action
   */
  export type DocsLinkCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaPostWhereInput
  }


  /**
   * Count Type IndustryCountOutputType
   */

  export type IndustryCountOutputType = {
    leads: number
    campaigns: number
  }

  export type IndustryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | IndustryCountOutputTypeCountLeadsArgs
    campaigns?: boolean | IndustryCountOutputTypeCountCampaignsArgs
  }

  // Custom InputTypes
  /**
   * IndustryCountOutputType without action
   */
  export type IndustryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IndustryCountOutputType
     */
    select?: IndustryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IndustryCountOutputType without action
   */
  export type IndustryCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }

  /**
   * IndustryCountOutputType without action
   */
  export type IndustryCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }


  /**
   * Count Type LeadCountOutputType
   */

  export type LeadCountOutputType = {
    outreachMessages: number
    meetings: number
  }

  export type LeadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outreachMessages?: boolean | LeadCountOutputTypeCountOutreachMessagesArgs
    meetings?: boolean | LeadCountOutputTypeCountMeetingsArgs
  }

  // Custom InputTypes
  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadCountOutputType
     */
    select?: LeadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountOutreachMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutreachMessageWhereInput
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    leads: number
    campaigns: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | LocationCountOutputTypeCountLeadsArgs
    campaigns?: boolean | LocationCountOutputTypeCountCampaignsArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }


  /**
   * Count Type ScrapingJobCountOutputType
   */

  export type ScrapingJobCountOutputType = {
    leads: number
  }

  export type ScrapingJobCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | ScrapingJobCountOutputTypeCountLeadsArgs
  }

  // Custom InputTypes
  /**
   * ScrapingJobCountOutputType without action
   */
  export type ScrapingJobCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJobCountOutputType
     */
    select?: ScrapingJobCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScrapingJobCountOutputType without action
   */
  export type ScrapingJobCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    campaigns: number
    docsLinks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | UserCountOutputTypeCountCampaignsArgs
    docsLinks?: boolean | UserCountOutputTypeCountDocsLinksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDocsLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocsLinkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AIPromptConfig
   */

  export type AggregateAIPromptConfig = {
    _count: AIPromptConfigCountAggregateOutputType | null
    _min: AIPromptConfigMinAggregateOutputType | null
    _max: AIPromptConfigMaxAggregateOutputType | null
  }

  export type AIPromptConfigMinAggregateOutputType = {
    id: string | null
    name: string | null
    promptType: string | null
    promptText: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AIPromptConfigMaxAggregateOutputType = {
    id: string | null
    name: string | null
    promptType: string | null
    promptText: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AIPromptConfigCountAggregateOutputType = {
    id: number
    name: number
    promptType: number
    promptText: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AIPromptConfigMinAggregateInputType = {
    id?: true
    name?: true
    promptType?: true
    promptText?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AIPromptConfigMaxAggregateInputType = {
    id?: true
    name?: true
    promptType?: true
    promptText?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AIPromptConfigCountAggregateInputType = {
    id?: true
    name?: true
    promptType?: true
    promptText?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AIPromptConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIPromptConfig to aggregate.
     */
    where?: AIPromptConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIPromptConfigs to fetch.
     */
    orderBy?: AIPromptConfigOrderByWithRelationInput | AIPromptConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIPromptConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIPromptConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIPromptConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIPromptConfigs
    **/
    _count?: true | AIPromptConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIPromptConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIPromptConfigMaxAggregateInputType
  }

  export type GetAIPromptConfigAggregateType<T extends AIPromptConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateAIPromptConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIPromptConfig[P]>
      : GetScalarType<T[P], AggregateAIPromptConfig[P]>
  }




  export type AIPromptConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIPromptConfigWhereInput
    orderBy?: AIPromptConfigOrderByWithAggregationInput | AIPromptConfigOrderByWithAggregationInput[]
    by: AIPromptConfigScalarFieldEnum[] | AIPromptConfigScalarFieldEnum
    having?: AIPromptConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIPromptConfigCountAggregateInputType | true
    _min?: AIPromptConfigMinAggregateInputType
    _max?: AIPromptConfigMaxAggregateInputType
  }

  export type AIPromptConfigGroupByOutputType = {
    id: string
    name: string
    promptType: string
    promptText: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AIPromptConfigCountAggregateOutputType | null
    _min: AIPromptConfigMinAggregateOutputType | null
    _max: AIPromptConfigMaxAggregateOutputType | null
  }

  type GetAIPromptConfigGroupByPayload<T extends AIPromptConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIPromptConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIPromptConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIPromptConfigGroupByOutputType[P]>
            : GetScalarType<T[P], AIPromptConfigGroupByOutputType[P]>
        }
      >
    >


  export type AIPromptConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    promptType?: boolean
    promptText?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aIPromptConfig"]>

  export type AIPromptConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    promptType?: boolean
    promptText?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aIPromptConfig"]>

  export type AIPromptConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    promptType?: boolean
    promptText?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aIPromptConfig"]>

  export type AIPromptConfigSelectScalar = {
    id?: boolean
    name?: boolean
    promptType?: boolean
    promptText?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AIPromptConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "promptType" | "promptText" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["aIPromptConfig"]>

  export type $AIPromptConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIPromptConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      promptType: string
      promptText: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aIPromptConfig"]>
    composites: {}
  }

  type AIPromptConfigGetPayload<S extends boolean | null | undefined | AIPromptConfigDefaultArgs> = $Result.GetResult<Prisma.$AIPromptConfigPayload, S>

  type AIPromptConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIPromptConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIPromptConfigCountAggregateInputType | true
    }

  export interface AIPromptConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIPromptConfig'], meta: { name: 'AIPromptConfig' } }
    /**
     * Find zero or one AIPromptConfig that matches the filter.
     * @param {AIPromptConfigFindUniqueArgs} args - Arguments to find a AIPromptConfig
     * @example
     * // Get one AIPromptConfig
     * const aIPromptConfig = await prisma.aIPromptConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIPromptConfigFindUniqueArgs>(args: SelectSubset<T, AIPromptConfigFindUniqueArgs<ExtArgs>>): Prisma__AIPromptConfigClient<$Result.GetResult<Prisma.$AIPromptConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIPromptConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIPromptConfigFindUniqueOrThrowArgs} args - Arguments to find a AIPromptConfig
     * @example
     * // Get one AIPromptConfig
     * const aIPromptConfig = await prisma.aIPromptConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIPromptConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, AIPromptConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIPromptConfigClient<$Result.GetResult<Prisma.$AIPromptConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIPromptConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIPromptConfigFindFirstArgs} args - Arguments to find a AIPromptConfig
     * @example
     * // Get one AIPromptConfig
     * const aIPromptConfig = await prisma.aIPromptConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIPromptConfigFindFirstArgs>(args?: SelectSubset<T, AIPromptConfigFindFirstArgs<ExtArgs>>): Prisma__AIPromptConfigClient<$Result.GetResult<Prisma.$AIPromptConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIPromptConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIPromptConfigFindFirstOrThrowArgs} args - Arguments to find a AIPromptConfig
     * @example
     * // Get one AIPromptConfig
     * const aIPromptConfig = await prisma.aIPromptConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIPromptConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, AIPromptConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIPromptConfigClient<$Result.GetResult<Prisma.$AIPromptConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIPromptConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIPromptConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIPromptConfigs
     * const aIPromptConfigs = await prisma.aIPromptConfig.findMany()
     * 
     * // Get first 10 AIPromptConfigs
     * const aIPromptConfigs = await prisma.aIPromptConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIPromptConfigWithIdOnly = await prisma.aIPromptConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIPromptConfigFindManyArgs>(args?: SelectSubset<T, AIPromptConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIPromptConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIPromptConfig.
     * @param {AIPromptConfigCreateArgs} args - Arguments to create a AIPromptConfig.
     * @example
     * // Create one AIPromptConfig
     * const AIPromptConfig = await prisma.aIPromptConfig.create({
     *   data: {
     *     // ... data to create a AIPromptConfig
     *   }
     * })
     * 
     */
    create<T extends AIPromptConfigCreateArgs>(args: SelectSubset<T, AIPromptConfigCreateArgs<ExtArgs>>): Prisma__AIPromptConfigClient<$Result.GetResult<Prisma.$AIPromptConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIPromptConfigs.
     * @param {AIPromptConfigCreateManyArgs} args - Arguments to create many AIPromptConfigs.
     * @example
     * // Create many AIPromptConfigs
     * const aIPromptConfig = await prisma.aIPromptConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIPromptConfigCreateManyArgs>(args?: SelectSubset<T, AIPromptConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIPromptConfigs and returns the data saved in the database.
     * @param {AIPromptConfigCreateManyAndReturnArgs} args - Arguments to create many AIPromptConfigs.
     * @example
     * // Create many AIPromptConfigs
     * const aIPromptConfig = await prisma.aIPromptConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIPromptConfigs and only return the `id`
     * const aIPromptConfigWithIdOnly = await prisma.aIPromptConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIPromptConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, AIPromptConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIPromptConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIPromptConfig.
     * @param {AIPromptConfigDeleteArgs} args - Arguments to delete one AIPromptConfig.
     * @example
     * // Delete one AIPromptConfig
     * const AIPromptConfig = await prisma.aIPromptConfig.delete({
     *   where: {
     *     // ... filter to delete one AIPromptConfig
     *   }
     * })
     * 
     */
    delete<T extends AIPromptConfigDeleteArgs>(args: SelectSubset<T, AIPromptConfigDeleteArgs<ExtArgs>>): Prisma__AIPromptConfigClient<$Result.GetResult<Prisma.$AIPromptConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIPromptConfig.
     * @param {AIPromptConfigUpdateArgs} args - Arguments to update one AIPromptConfig.
     * @example
     * // Update one AIPromptConfig
     * const aIPromptConfig = await prisma.aIPromptConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIPromptConfigUpdateArgs>(args: SelectSubset<T, AIPromptConfigUpdateArgs<ExtArgs>>): Prisma__AIPromptConfigClient<$Result.GetResult<Prisma.$AIPromptConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIPromptConfigs.
     * @param {AIPromptConfigDeleteManyArgs} args - Arguments to filter AIPromptConfigs to delete.
     * @example
     * // Delete a few AIPromptConfigs
     * const { count } = await prisma.aIPromptConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIPromptConfigDeleteManyArgs>(args?: SelectSubset<T, AIPromptConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIPromptConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIPromptConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIPromptConfigs
     * const aIPromptConfig = await prisma.aIPromptConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIPromptConfigUpdateManyArgs>(args: SelectSubset<T, AIPromptConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIPromptConfigs and returns the data updated in the database.
     * @param {AIPromptConfigUpdateManyAndReturnArgs} args - Arguments to update many AIPromptConfigs.
     * @example
     * // Update many AIPromptConfigs
     * const aIPromptConfig = await prisma.aIPromptConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIPromptConfigs and only return the `id`
     * const aIPromptConfigWithIdOnly = await prisma.aIPromptConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AIPromptConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, AIPromptConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIPromptConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIPromptConfig.
     * @param {AIPromptConfigUpsertArgs} args - Arguments to update or create a AIPromptConfig.
     * @example
     * // Update or create a AIPromptConfig
     * const aIPromptConfig = await prisma.aIPromptConfig.upsert({
     *   create: {
     *     // ... data to create a AIPromptConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIPromptConfig we want to update
     *   }
     * })
     */
    upsert<T extends AIPromptConfigUpsertArgs>(args: SelectSubset<T, AIPromptConfigUpsertArgs<ExtArgs>>): Prisma__AIPromptConfigClient<$Result.GetResult<Prisma.$AIPromptConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIPromptConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIPromptConfigCountArgs} args - Arguments to filter AIPromptConfigs to count.
     * @example
     * // Count the number of AIPromptConfigs
     * const count = await prisma.aIPromptConfig.count({
     *   where: {
     *     // ... the filter for the AIPromptConfigs we want to count
     *   }
     * })
    **/
    count<T extends AIPromptConfigCountArgs>(
      args?: Subset<T, AIPromptConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIPromptConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIPromptConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIPromptConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AIPromptConfigAggregateArgs>(args: Subset<T, AIPromptConfigAggregateArgs>): Prisma.PrismaPromise<GetAIPromptConfigAggregateType<T>>

    /**
     * Group by AIPromptConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIPromptConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AIPromptConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIPromptConfigGroupByArgs['orderBy'] }
        : { orderBy?: AIPromptConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AIPromptConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIPromptConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIPromptConfig model
   */
  readonly fields: AIPromptConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIPromptConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIPromptConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AIPromptConfig model
   */
  interface AIPromptConfigFieldRefs {
    readonly id: FieldRef<"AIPromptConfig", 'String'>
    readonly name: FieldRef<"AIPromptConfig", 'String'>
    readonly promptType: FieldRef<"AIPromptConfig", 'String'>
    readonly promptText: FieldRef<"AIPromptConfig", 'String'>
    readonly isActive: FieldRef<"AIPromptConfig", 'Boolean'>
    readonly createdAt: FieldRef<"AIPromptConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"AIPromptConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AIPromptConfig findUnique
   */
  export type AIPromptConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPromptConfig
     */
    select?: AIPromptConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPromptConfig
     */
    omit?: AIPromptConfigOmit<ExtArgs> | null
    /**
     * Filter, which AIPromptConfig to fetch.
     */
    where: AIPromptConfigWhereUniqueInput
  }

  /**
   * AIPromptConfig findUniqueOrThrow
   */
  export type AIPromptConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPromptConfig
     */
    select?: AIPromptConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPromptConfig
     */
    omit?: AIPromptConfigOmit<ExtArgs> | null
    /**
     * Filter, which AIPromptConfig to fetch.
     */
    where: AIPromptConfigWhereUniqueInput
  }

  /**
   * AIPromptConfig findFirst
   */
  export type AIPromptConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPromptConfig
     */
    select?: AIPromptConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPromptConfig
     */
    omit?: AIPromptConfigOmit<ExtArgs> | null
    /**
     * Filter, which AIPromptConfig to fetch.
     */
    where?: AIPromptConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIPromptConfigs to fetch.
     */
    orderBy?: AIPromptConfigOrderByWithRelationInput | AIPromptConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIPromptConfigs.
     */
    cursor?: AIPromptConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIPromptConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIPromptConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIPromptConfigs.
     */
    distinct?: AIPromptConfigScalarFieldEnum | AIPromptConfigScalarFieldEnum[]
  }

  /**
   * AIPromptConfig findFirstOrThrow
   */
  export type AIPromptConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPromptConfig
     */
    select?: AIPromptConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPromptConfig
     */
    omit?: AIPromptConfigOmit<ExtArgs> | null
    /**
     * Filter, which AIPromptConfig to fetch.
     */
    where?: AIPromptConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIPromptConfigs to fetch.
     */
    orderBy?: AIPromptConfigOrderByWithRelationInput | AIPromptConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIPromptConfigs.
     */
    cursor?: AIPromptConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIPromptConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIPromptConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIPromptConfigs.
     */
    distinct?: AIPromptConfigScalarFieldEnum | AIPromptConfigScalarFieldEnum[]
  }

  /**
   * AIPromptConfig findMany
   */
  export type AIPromptConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPromptConfig
     */
    select?: AIPromptConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPromptConfig
     */
    omit?: AIPromptConfigOmit<ExtArgs> | null
    /**
     * Filter, which AIPromptConfigs to fetch.
     */
    where?: AIPromptConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIPromptConfigs to fetch.
     */
    orderBy?: AIPromptConfigOrderByWithRelationInput | AIPromptConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIPromptConfigs.
     */
    cursor?: AIPromptConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIPromptConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIPromptConfigs.
     */
    skip?: number
    distinct?: AIPromptConfigScalarFieldEnum | AIPromptConfigScalarFieldEnum[]
  }

  /**
   * AIPromptConfig create
   */
  export type AIPromptConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPromptConfig
     */
    select?: AIPromptConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPromptConfig
     */
    omit?: AIPromptConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a AIPromptConfig.
     */
    data: XOR<AIPromptConfigCreateInput, AIPromptConfigUncheckedCreateInput>
  }

  /**
   * AIPromptConfig createMany
   */
  export type AIPromptConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIPromptConfigs.
     */
    data: AIPromptConfigCreateManyInput | AIPromptConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIPromptConfig createManyAndReturn
   */
  export type AIPromptConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPromptConfig
     */
    select?: AIPromptConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIPromptConfig
     */
    omit?: AIPromptConfigOmit<ExtArgs> | null
    /**
     * The data used to create many AIPromptConfigs.
     */
    data: AIPromptConfigCreateManyInput | AIPromptConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIPromptConfig update
   */
  export type AIPromptConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPromptConfig
     */
    select?: AIPromptConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPromptConfig
     */
    omit?: AIPromptConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a AIPromptConfig.
     */
    data: XOR<AIPromptConfigUpdateInput, AIPromptConfigUncheckedUpdateInput>
    /**
     * Choose, which AIPromptConfig to update.
     */
    where: AIPromptConfigWhereUniqueInput
  }

  /**
   * AIPromptConfig updateMany
   */
  export type AIPromptConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIPromptConfigs.
     */
    data: XOR<AIPromptConfigUpdateManyMutationInput, AIPromptConfigUncheckedUpdateManyInput>
    /**
     * Filter which AIPromptConfigs to update
     */
    where?: AIPromptConfigWhereInput
    /**
     * Limit how many AIPromptConfigs to update.
     */
    limit?: number
  }

  /**
   * AIPromptConfig updateManyAndReturn
   */
  export type AIPromptConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPromptConfig
     */
    select?: AIPromptConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIPromptConfig
     */
    omit?: AIPromptConfigOmit<ExtArgs> | null
    /**
     * The data used to update AIPromptConfigs.
     */
    data: XOR<AIPromptConfigUpdateManyMutationInput, AIPromptConfigUncheckedUpdateManyInput>
    /**
     * Filter which AIPromptConfigs to update
     */
    where?: AIPromptConfigWhereInput
    /**
     * Limit how many AIPromptConfigs to update.
     */
    limit?: number
  }

  /**
   * AIPromptConfig upsert
   */
  export type AIPromptConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPromptConfig
     */
    select?: AIPromptConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPromptConfig
     */
    omit?: AIPromptConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the AIPromptConfig to update in case it exists.
     */
    where: AIPromptConfigWhereUniqueInput
    /**
     * In case the AIPromptConfig found by the `where` argument doesn't exist, create a new AIPromptConfig with this data.
     */
    create: XOR<AIPromptConfigCreateInput, AIPromptConfigUncheckedCreateInput>
    /**
     * In case the AIPromptConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIPromptConfigUpdateInput, AIPromptConfigUncheckedUpdateInput>
  }

  /**
   * AIPromptConfig delete
   */
  export type AIPromptConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPromptConfig
     */
    select?: AIPromptConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPromptConfig
     */
    omit?: AIPromptConfigOmit<ExtArgs> | null
    /**
     * Filter which AIPromptConfig to delete.
     */
    where: AIPromptConfigWhereUniqueInput
  }

  /**
   * AIPromptConfig deleteMany
   */
  export type AIPromptConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIPromptConfigs to delete
     */
    where?: AIPromptConfigWhereInput
    /**
     * Limit how many AIPromptConfigs to delete.
     */
    limit?: number
  }

  /**
   * AIPromptConfig without action
   */
  export type AIPromptConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPromptConfig
     */
    select?: AIPromptConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPromptConfig
     */
    omit?: AIPromptConfigOmit<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    followerThreshold: number | null
  }

  export type CampaignSumAggregateOutputType = {
    followerThreshold: number | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    firstMessage: string | null
    apifyDatasetId: string | null
    status: $Enums.ECampaignStatus | null
    platform: $Enums.EPlatform | null
    location: string | null
    industry: string | null
    followerThreshold: number | null
    specification: string | null
    targetIndustryId: string | null
    targetLocationId: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    firstMessage: string | null
    apifyDatasetId: string | null
    status: $Enums.ECampaignStatus | null
    platform: $Enums.EPlatform | null
    location: string | null
    industry: string | null
    followerThreshold: number | null
    specification: string | null
    targetIndustryId: string | null
    targetLocationId: string | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    name: number
    description: number
    firstMessage: number
    apifyDatasetId: number
    status: number
    platform: number
    location: number
    industry: number
    followerThreshold: number
    specification: number
    targetIndustryId: number
    targetLocationId: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    followerThreshold?: true
  }

  export type CampaignSumAggregateInputType = {
    followerThreshold?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    firstMessage?: true
    apifyDatasetId?: true
    status?: true
    platform?: true
    location?: true
    industry?: true
    followerThreshold?: true
    specification?: true
    targetIndustryId?: true
    targetLocationId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    firstMessage?: true
    apifyDatasetId?: true
    status?: true
    platform?: true
    location?: true
    industry?: true
    followerThreshold?: true
    specification?: true
    targetIndustryId?: true
    targetLocationId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    firstMessage?: true
    apifyDatasetId?: true
    status?: true
    platform?: true
    location?: true
    industry?: true
    followerThreshold?: true
    specification?: true
    targetIndustryId?: true
    targetLocationId?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    name: string
    description: string | null
    firstMessage: string | null
    apifyDatasetId: string | null
    status: $Enums.ECampaignStatus
    platform: $Enums.EPlatform
    location: string | null
    industry: string | null
    followerThreshold: number
    specification: string | null
    targetIndustryId: string | null
    targetLocationId: string | null
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    firstMessage?: boolean
    apifyDatasetId?: boolean
    status?: boolean
    platform?: boolean
    location?: boolean
    industry?: boolean
    followerThreshold?: boolean
    specification?: boolean
    targetIndustryId?: boolean
    targetLocationId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    targetIndustry?: boolean | Campaign$targetIndustryArgs<ExtArgs>
    targetLocation?: boolean | Campaign$targetLocationArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    leads?: boolean | Campaign$leadsArgs<ExtArgs>
    outreachMessages?: boolean | Campaign$outreachMessagesArgs<ExtArgs>
    scrapingJobs?: boolean | Campaign$scrapingJobsArgs<ExtArgs>
    meetings?: boolean | Campaign$meetingsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    firstMessage?: boolean
    apifyDatasetId?: boolean
    status?: boolean
    platform?: boolean
    location?: boolean
    industry?: boolean
    followerThreshold?: boolean
    specification?: boolean
    targetIndustryId?: boolean
    targetLocationId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    targetIndustry?: boolean | Campaign$targetIndustryArgs<ExtArgs>
    targetLocation?: boolean | Campaign$targetLocationArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    firstMessage?: boolean
    apifyDatasetId?: boolean
    status?: boolean
    platform?: boolean
    location?: boolean
    industry?: boolean
    followerThreshold?: boolean
    specification?: boolean
    targetIndustryId?: boolean
    targetLocationId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    targetIndustry?: boolean | Campaign$targetIndustryArgs<ExtArgs>
    targetLocation?: boolean | Campaign$targetLocationArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    firstMessage?: boolean
    apifyDatasetId?: boolean
    status?: boolean
    platform?: boolean
    location?: boolean
    industry?: boolean
    followerThreshold?: boolean
    specification?: boolean
    targetIndustryId?: boolean
    targetLocationId?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "firstMessage" | "apifyDatasetId" | "status" | "platform" | "location" | "industry" | "followerThreshold" | "specification" | "targetIndustryId" | "targetLocationId" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    targetIndustry?: boolean | Campaign$targetIndustryArgs<ExtArgs>
    targetLocation?: boolean | Campaign$targetLocationArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    leads?: boolean | Campaign$leadsArgs<ExtArgs>
    outreachMessages?: boolean | Campaign$outreachMessagesArgs<ExtArgs>
    scrapingJobs?: boolean | Campaign$scrapingJobsArgs<ExtArgs>
    meetings?: boolean | Campaign$meetingsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    targetIndustry?: boolean | Campaign$targetIndustryArgs<ExtArgs>
    targetLocation?: boolean | Campaign$targetLocationArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    targetIndustry?: boolean | Campaign$targetIndustryArgs<ExtArgs>
    targetLocation?: boolean | Campaign$targetLocationArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      targetIndustry: Prisma.$IndustryPayload<ExtArgs> | null
      targetLocation: Prisma.$LocationPayload<ExtArgs> | null
      createdBy: Prisma.$UserPayload<ExtArgs>
      leads: Prisma.$LeadPayload<ExtArgs>[]
      outreachMessages: Prisma.$OutreachMessagePayload<ExtArgs>[]
      scrapingJobs: Prisma.$ScrapingJobPayload<ExtArgs>[]
      meetings: Prisma.$MeetingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      firstMessage: string | null
      apifyDatasetId: string | null
      status: $Enums.ECampaignStatus
      platform: $Enums.EPlatform
      location: string | null
      industry: string | null
      followerThreshold: number
      specification: string | null
      targetIndustryId: string | null
      targetLocationId: string | null
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    targetIndustry<T extends Campaign$targetIndustryArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$targetIndustryArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    targetLocation<T extends Campaign$targetLocationArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$targetLocationArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leads<T extends Campaign$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    outreachMessages<T extends Campaign$outreachMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$outreachMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutreachMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scrapingJobs<T extends Campaign$scrapingJobsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$scrapingJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapingJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meetings<T extends Campaign$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly name: FieldRef<"Campaign", 'String'>
    readonly description: FieldRef<"Campaign", 'String'>
    readonly firstMessage: FieldRef<"Campaign", 'String'>
    readonly apifyDatasetId: FieldRef<"Campaign", 'String'>
    readonly status: FieldRef<"Campaign", 'ECampaignStatus'>
    readonly platform: FieldRef<"Campaign", 'EPlatform'>
    readonly location: FieldRef<"Campaign", 'String'>
    readonly industry: FieldRef<"Campaign", 'String'>
    readonly followerThreshold: FieldRef<"Campaign", 'Int'>
    readonly specification: FieldRef<"Campaign", 'String'>
    readonly targetIndustryId: FieldRef<"Campaign", 'String'>
    readonly targetLocationId: FieldRef<"Campaign", 'String'>
    readonly createdById: FieldRef<"Campaign", 'String'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign.targetIndustry
   */
  export type Campaign$targetIndustryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    where?: IndustryWhereInput
  }

  /**
   * Campaign.targetLocation
   */
  export type Campaign$targetLocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
  }

  /**
   * Campaign.leads
   */
  export type Campaign$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Campaign.outreachMessages
   */
  export type Campaign$outreachMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutreachMessage
     */
    select?: OutreachMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutreachMessage
     */
    omit?: OutreachMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutreachMessageInclude<ExtArgs> | null
    where?: OutreachMessageWhereInput
    orderBy?: OutreachMessageOrderByWithRelationInput | OutreachMessageOrderByWithRelationInput[]
    cursor?: OutreachMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutreachMessageScalarFieldEnum | OutreachMessageScalarFieldEnum[]
  }

  /**
   * Campaign.scrapingJobs
   */
  export type Campaign$scrapingJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapingJob
     */
    omit?: ScrapingJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapingJobInclude<ExtArgs> | null
    where?: ScrapingJobWhereInput
    orderBy?: ScrapingJobOrderByWithRelationInput | ScrapingJobOrderByWithRelationInput[]
    cursor?: ScrapingJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScrapingJobScalarFieldEnum | ScrapingJobScalarFieldEnum[]
  }

  /**
   * Campaign.meetings
   */
  export type Campaign$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    cursor?: MeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model Config
   */

  export type AggregateConfig = {
    _count: ConfigCountAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  export type ConfigMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfigMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConfigCountAggregateOutputType = {
    id: number
    key: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConfigMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfigMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConfigCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Config to aggregate.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Configs
    **/
    _count?: true | ConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfigMaxAggregateInputType
  }

  export type GetConfigAggregateType<T extends ConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfig[P]>
      : GetScalarType<T[P], AggregateConfig[P]>
  }




  export type ConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfigWhereInput
    orderBy?: ConfigOrderByWithAggregationInput | ConfigOrderByWithAggregationInput[]
    by: ConfigScalarFieldEnum[] | ConfigScalarFieldEnum
    having?: ConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfigCountAggregateInputType | true
    _min?: ConfigMinAggregateInputType
    _max?: ConfigMaxAggregateInputType
  }

  export type ConfigGroupByOutputType = {
    id: string
    key: string
    value: string
    createdAt: Date
    updatedAt: Date
    _count: ConfigCountAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  type GetConfigGroupByPayload<T extends ConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfigGroupByOutputType[P]>
            : GetScalarType<T[P], ConfigGroupByOutputType[P]>
        }
      >
    >


  export type ConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["config"]>

  export type ConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["config"]>

  export type ConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["config"]>

  export type ConfigSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "createdAt" | "updatedAt", ExtArgs["result"]["config"]>

  export type $ConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Config"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["config"]>
    composites: {}
  }

  type ConfigGetPayload<S extends boolean | null | undefined | ConfigDefaultArgs> = $Result.GetResult<Prisma.$ConfigPayload, S>

  type ConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfigCountAggregateInputType | true
    }

  export interface ConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Config'], meta: { name: 'Config' } }
    /**
     * Find zero or one Config that matches the filter.
     * @param {ConfigFindUniqueArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfigFindUniqueArgs>(args: SelectSubset<T, ConfigFindUniqueArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Config that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfigFindUniqueOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindFirstArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfigFindFirstArgs>(args?: SelectSubset<T, ConfigFindFirstArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Config that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindFirstOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configs
     * const configs = await prisma.config.findMany()
     * 
     * // Get first 10 Configs
     * const configs = await prisma.config.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const configWithIdOnly = await prisma.config.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfigFindManyArgs>(args?: SelectSubset<T, ConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Config.
     * @param {ConfigCreateArgs} args - Arguments to create a Config.
     * @example
     * // Create one Config
     * const Config = await prisma.config.create({
     *   data: {
     *     // ... data to create a Config
     *   }
     * })
     * 
     */
    create<T extends ConfigCreateArgs>(args: SelectSubset<T, ConfigCreateArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Configs.
     * @param {ConfigCreateManyArgs} args - Arguments to create many Configs.
     * @example
     * // Create many Configs
     * const config = await prisma.config.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfigCreateManyArgs>(args?: SelectSubset<T, ConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Configs and returns the data saved in the database.
     * @param {ConfigCreateManyAndReturnArgs} args - Arguments to create many Configs.
     * @example
     * // Create many Configs
     * const config = await prisma.config.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Configs and only return the `id`
     * const configWithIdOnly = await prisma.config.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Config.
     * @param {ConfigDeleteArgs} args - Arguments to delete one Config.
     * @example
     * // Delete one Config
     * const Config = await prisma.config.delete({
     *   where: {
     *     // ... filter to delete one Config
     *   }
     * })
     * 
     */
    delete<T extends ConfigDeleteArgs>(args: SelectSubset<T, ConfigDeleteArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Config.
     * @param {ConfigUpdateArgs} args - Arguments to update one Config.
     * @example
     * // Update one Config
     * const config = await prisma.config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfigUpdateArgs>(args: SelectSubset<T, ConfigUpdateArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Configs.
     * @param {ConfigDeleteManyArgs} args - Arguments to filter Configs to delete.
     * @example
     * // Delete a few Configs
     * const { count } = await prisma.config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfigDeleteManyArgs>(args?: SelectSubset<T, ConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configs
     * const config = await prisma.config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfigUpdateManyArgs>(args: SelectSubset<T, ConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configs and returns the data updated in the database.
     * @param {ConfigUpdateManyAndReturnArgs} args - Arguments to update many Configs.
     * @example
     * // Update many Configs
     * const config = await prisma.config.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Configs and only return the `id`
     * const configWithIdOnly = await prisma.config.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, ConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Config.
     * @param {ConfigUpsertArgs} args - Arguments to update or create a Config.
     * @example
     * // Update or create a Config
     * const config = await prisma.config.upsert({
     *   create: {
     *     // ... data to create a Config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Config we want to update
     *   }
     * })
     */
    upsert<T extends ConfigUpsertArgs>(args: SelectSubset<T, ConfigUpsertArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigCountArgs} args - Arguments to filter Configs to count.
     * @example
     * // Count the number of Configs
     * const count = await prisma.config.count({
     *   where: {
     *     // ... the filter for the Configs we want to count
     *   }
     * })
    **/
    count<T extends ConfigCountArgs>(
      args?: Subset<T, ConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConfigAggregateArgs>(args: Subset<T, ConfigAggregateArgs>): Prisma.PrismaPromise<GetConfigAggregateType<T>>

    /**
     * Group by Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfigGroupByArgs['orderBy'] }
        : { orderBy?: ConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Config model
   */
  readonly fields: ConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Config model
   */
  interface ConfigFieldRefs {
    readonly id: FieldRef<"Config", 'String'>
    readonly key: FieldRef<"Config", 'String'>
    readonly value: FieldRef<"Config", 'String'>
    readonly createdAt: FieldRef<"Config", 'DateTime'>
    readonly updatedAt: FieldRef<"Config", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Config findUnique
   */
  export type ConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config findUniqueOrThrow
   */
  export type ConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config findFirst
   */
  export type ConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configs.
     */
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config findFirstOrThrow
   */
  export type ConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configs.
     */
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config findMany
   */
  export type ConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter, which Configs to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config create
   */
  export type ConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a Config.
     */
    data: XOR<ConfigCreateInput, ConfigUncheckedCreateInput>
  }

  /**
   * Config createMany
   */
  export type ConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Configs.
     */
    data: ConfigCreateManyInput | ConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Config createManyAndReturn
   */
  export type ConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * The data used to create many Configs.
     */
    data: ConfigCreateManyInput | ConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Config update
   */
  export type ConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a Config.
     */
    data: XOR<ConfigUpdateInput, ConfigUncheckedUpdateInput>
    /**
     * Choose, which Config to update.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config updateMany
   */
  export type ConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Configs.
     */
    data: XOR<ConfigUpdateManyMutationInput, ConfigUncheckedUpdateManyInput>
    /**
     * Filter which Configs to update
     */
    where?: ConfigWhereInput
    /**
     * Limit how many Configs to update.
     */
    limit?: number
  }

  /**
   * Config updateManyAndReturn
   */
  export type ConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * The data used to update Configs.
     */
    data: XOR<ConfigUpdateManyMutationInput, ConfigUncheckedUpdateManyInput>
    /**
     * Filter which Configs to update
     */
    where?: ConfigWhereInput
    /**
     * Limit how many Configs to update.
     */
    limit?: number
  }

  /**
   * Config upsert
   */
  export type ConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the Config to update in case it exists.
     */
    where: ConfigWhereUniqueInput
    /**
     * In case the Config found by the `where` argument doesn't exist, create a new Config with this data.
     */
    create: XOR<ConfigCreateInput, ConfigUncheckedCreateInput>
    /**
     * In case the Config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfigUpdateInput, ConfigUncheckedUpdateInput>
  }

  /**
   * Config delete
   */
  export type ConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
    /**
     * Filter which Config to delete.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config deleteMany
   */
  export type ConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configs to delete
     */
    where?: ConfigWhereInput
    /**
     * Limit how many Configs to delete.
     */
    limit?: number
  }

  /**
   * Config without action
   */
  export type ConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Config
     */
    omit?: ConfigOmit<ExtArgs> | null
  }


  /**
   * Model DocsLink
   */

  export type AggregateDocsLink = {
    _count: DocsLinkCountAggregateOutputType | null
    _avg: DocsLinkAvgAggregateOutputType | null
    _sum: DocsLinkSumAggregateOutputType | null
    _min: DocsLinkMinAggregateOutputType | null
    _max: DocsLinkMaxAggregateOutputType | null
  }

  export type DocsLinkAvgAggregateOutputType = {
    postGenerate: number | null
  }

  export type DocsLinkSumAggregateOutputType = {
    postGenerate: number | null
  }

  export type DocsLinkMinAggregateOutputType = {
    id: string | null
    name: string | null
    projectName: string | null
    docsLink: string | null
    prompt: string | null
    postGenerate: number | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocsLinkMaxAggregateOutputType = {
    id: string | null
    name: string | null
    projectName: string | null
    docsLink: string | null
    prompt: string | null
    postGenerate: number | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocsLinkCountAggregateOutputType = {
    id: number
    name: number
    projectName: number
    docsLink: number
    prompt: number
    postGenerate: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocsLinkAvgAggregateInputType = {
    postGenerate?: true
  }

  export type DocsLinkSumAggregateInputType = {
    postGenerate?: true
  }

  export type DocsLinkMinAggregateInputType = {
    id?: true
    name?: true
    projectName?: true
    docsLink?: true
    prompt?: true
    postGenerate?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocsLinkMaxAggregateInputType = {
    id?: true
    name?: true
    projectName?: true
    docsLink?: true
    prompt?: true
    postGenerate?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocsLinkCountAggregateInputType = {
    id?: true
    name?: true
    projectName?: true
    docsLink?: true
    prompt?: true
    postGenerate?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocsLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocsLink to aggregate.
     */
    where?: DocsLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocsLinks to fetch.
     */
    orderBy?: DocsLinkOrderByWithRelationInput | DocsLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocsLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocsLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocsLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocsLinks
    **/
    _count?: true | DocsLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocsLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocsLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocsLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocsLinkMaxAggregateInputType
  }

  export type GetDocsLinkAggregateType<T extends DocsLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateDocsLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocsLink[P]>
      : GetScalarType<T[P], AggregateDocsLink[P]>
  }




  export type DocsLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocsLinkWhereInput
    orderBy?: DocsLinkOrderByWithAggregationInput | DocsLinkOrderByWithAggregationInput[]
    by: DocsLinkScalarFieldEnum[] | DocsLinkScalarFieldEnum
    having?: DocsLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocsLinkCountAggregateInputType | true
    _avg?: DocsLinkAvgAggregateInputType
    _sum?: DocsLinkSumAggregateInputType
    _min?: DocsLinkMinAggregateInputType
    _max?: DocsLinkMaxAggregateInputType
  }

  export type DocsLinkGroupByOutputType = {
    id: string
    name: string
    projectName: string
    docsLink: string
    prompt: string | null
    postGenerate: number
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: DocsLinkCountAggregateOutputType | null
    _avg: DocsLinkAvgAggregateOutputType | null
    _sum: DocsLinkSumAggregateOutputType | null
    _min: DocsLinkMinAggregateOutputType | null
    _max: DocsLinkMaxAggregateOutputType | null
  }

  type GetDocsLinkGroupByPayload<T extends DocsLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocsLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocsLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocsLinkGroupByOutputType[P]>
            : GetScalarType<T[P], DocsLinkGroupByOutputType[P]>
        }
      >
    >


  export type DocsLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectName?: boolean
    docsLink?: boolean
    prompt?: boolean
    postGenerate?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    posts?: boolean | DocsLink$postsArgs<ExtArgs>
    _count?: boolean | DocsLinkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["docsLink"]>

  export type DocsLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectName?: boolean
    docsLink?: boolean
    prompt?: boolean
    postGenerate?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["docsLink"]>

  export type DocsLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    projectName?: boolean
    docsLink?: boolean
    prompt?: boolean
    postGenerate?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["docsLink"]>

  export type DocsLinkSelectScalar = {
    id?: boolean
    name?: boolean
    projectName?: boolean
    docsLink?: boolean
    prompt?: boolean
    postGenerate?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocsLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "projectName" | "docsLink" | "prompt" | "postGenerate" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["docsLink"]>
  export type DocsLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    posts?: boolean | DocsLink$postsArgs<ExtArgs>
    _count?: boolean | DocsLinkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocsLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DocsLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DocsLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocsLink"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      posts: Prisma.$MediaPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      projectName: string
      docsLink: string
      prompt: string | null
      postGenerate: number
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["docsLink"]>
    composites: {}
  }

  type DocsLinkGetPayload<S extends boolean | null | undefined | DocsLinkDefaultArgs> = $Result.GetResult<Prisma.$DocsLinkPayload, S>

  type DocsLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocsLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocsLinkCountAggregateInputType | true
    }

  export interface DocsLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocsLink'], meta: { name: 'DocsLink' } }
    /**
     * Find zero or one DocsLink that matches the filter.
     * @param {DocsLinkFindUniqueArgs} args - Arguments to find a DocsLink
     * @example
     * // Get one DocsLink
     * const docsLink = await prisma.docsLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocsLinkFindUniqueArgs>(args: SelectSubset<T, DocsLinkFindUniqueArgs<ExtArgs>>): Prisma__DocsLinkClient<$Result.GetResult<Prisma.$DocsLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocsLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocsLinkFindUniqueOrThrowArgs} args - Arguments to find a DocsLink
     * @example
     * // Get one DocsLink
     * const docsLink = await prisma.docsLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocsLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, DocsLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocsLinkClient<$Result.GetResult<Prisma.$DocsLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocsLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocsLinkFindFirstArgs} args - Arguments to find a DocsLink
     * @example
     * // Get one DocsLink
     * const docsLink = await prisma.docsLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocsLinkFindFirstArgs>(args?: SelectSubset<T, DocsLinkFindFirstArgs<ExtArgs>>): Prisma__DocsLinkClient<$Result.GetResult<Prisma.$DocsLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocsLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocsLinkFindFirstOrThrowArgs} args - Arguments to find a DocsLink
     * @example
     * // Get one DocsLink
     * const docsLink = await prisma.docsLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocsLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, DocsLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocsLinkClient<$Result.GetResult<Prisma.$DocsLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocsLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocsLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocsLinks
     * const docsLinks = await prisma.docsLink.findMany()
     * 
     * // Get first 10 DocsLinks
     * const docsLinks = await prisma.docsLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const docsLinkWithIdOnly = await prisma.docsLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocsLinkFindManyArgs>(args?: SelectSubset<T, DocsLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocsLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocsLink.
     * @param {DocsLinkCreateArgs} args - Arguments to create a DocsLink.
     * @example
     * // Create one DocsLink
     * const DocsLink = await prisma.docsLink.create({
     *   data: {
     *     // ... data to create a DocsLink
     *   }
     * })
     * 
     */
    create<T extends DocsLinkCreateArgs>(args: SelectSubset<T, DocsLinkCreateArgs<ExtArgs>>): Prisma__DocsLinkClient<$Result.GetResult<Prisma.$DocsLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocsLinks.
     * @param {DocsLinkCreateManyArgs} args - Arguments to create many DocsLinks.
     * @example
     * // Create many DocsLinks
     * const docsLink = await prisma.docsLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocsLinkCreateManyArgs>(args?: SelectSubset<T, DocsLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocsLinks and returns the data saved in the database.
     * @param {DocsLinkCreateManyAndReturnArgs} args - Arguments to create many DocsLinks.
     * @example
     * // Create many DocsLinks
     * const docsLink = await prisma.docsLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocsLinks and only return the `id`
     * const docsLinkWithIdOnly = await prisma.docsLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocsLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, DocsLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocsLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocsLink.
     * @param {DocsLinkDeleteArgs} args - Arguments to delete one DocsLink.
     * @example
     * // Delete one DocsLink
     * const DocsLink = await prisma.docsLink.delete({
     *   where: {
     *     // ... filter to delete one DocsLink
     *   }
     * })
     * 
     */
    delete<T extends DocsLinkDeleteArgs>(args: SelectSubset<T, DocsLinkDeleteArgs<ExtArgs>>): Prisma__DocsLinkClient<$Result.GetResult<Prisma.$DocsLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocsLink.
     * @param {DocsLinkUpdateArgs} args - Arguments to update one DocsLink.
     * @example
     * // Update one DocsLink
     * const docsLink = await prisma.docsLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocsLinkUpdateArgs>(args: SelectSubset<T, DocsLinkUpdateArgs<ExtArgs>>): Prisma__DocsLinkClient<$Result.GetResult<Prisma.$DocsLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocsLinks.
     * @param {DocsLinkDeleteManyArgs} args - Arguments to filter DocsLinks to delete.
     * @example
     * // Delete a few DocsLinks
     * const { count } = await prisma.docsLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocsLinkDeleteManyArgs>(args?: SelectSubset<T, DocsLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocsLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocsLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocsLinks
     * const docsLink = await prisma.docsLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocsLinkUpdateManyArgs>(args: SelectSubset<T, DocsLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocsLinks and returns the data updated in the database.
     * @param {DocsLinkUpdateManyAndReturnArgs} args - Arguments to update many DocsLinks.
     * @example
     * // Update many DocsLinks
     * const docsLink = await prisma.docsLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocsLinks and only return the `id`
     * const docsLinkWithIdOnly = await prisma.docsLink.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocsLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, DocsLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocsLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocsLink.
     * @param {DocsLinkUpsertArgs} args - Arguments to update or create a DocsLink.
     * @example
     * // Update or create a DocsLink
     * const docsLink = await prisma.docsLink.upsert({
     *   create: {
     *     // ... data to create a DocsLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocsLink we want to update
     *   }
     * })
     */
    upsert<T extends DocsLinkUpsertArgs>(args: SelectSubset<T, DocsLinkUpsertArgs<ExtArgs>>): Prisma__DocsLinkClient<$Result.GetResult<Prisma.$DocsLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocsLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocsLinkCountArgs} args - Arguments to filter DocsLinks to count.
     * @example
     * // Count the number of DocsLinks
     * const count = await prisma.docsLink.count({
     *   where: {
     *     // ... the filter for the DocsLinks we want to count
     *   }
     * })
    **/
    count<T extends DocsLinkCountArgs>(
      args?: Subset<T, DocsLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocsLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocsLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocsLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocsLinkAggregateArgs>(args: Subset<T, DocsLinkAggregateArgs>): Prisma.PrismaPromise<GetDocsLinkAggregateType<T>>

    /**
     * Group by DocsLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocsLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocsLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocsLinkGroupByArgs['orderBy'] }
        : { orderBy?: DocsLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocsLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocsLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocsLink model
   */
  readonly fields: DocsLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocsLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocsLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    posts<T extends DocsLink$postsArgs<ExtArgs> = {}>(args?: Subset<T, DocsLink$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DocsLink model
   */
  interface DocsLinkFieldRefs {
    readonly id: FieldRef<"DocsLink", 'String'>
    readonly name: FieldRef<"DocsLink", 'String'>
    readonly projectName: FieldRef<"DocsLink", 'String'>
    readonly docsLink: FieldRef<"DocsLink", 'String'>
    readonly prompt: FieldRef<"DocsLink", 'String'>
    readonly postGenerate: FieldRef<"DocsLink", 'Int'>
    readonly createdById: FieldRef<"DocsLink", 'String'>
    readonly createdAt: FieldRef<"DocsLink", 'DateTime'>
    readonly updatedAt: FieldRef<"DocsLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DocsLink findUnique
   */
  export type DocsLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocsLink
     */
    select?: DocsLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocsLink
     */
    omit?: DocsLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocsLinkInclude<ExtArgs> | null
    /**
     * Filter, which DocsLink to fetch.
     */
    where: DocsLinkWhereUniqueInput
  }

  /**
   * DocsLink findUniqueOrThrow
   */
  export type DocsLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocsLink
     */
    select?: DocsLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocsLink
     */
    omit?: DocsLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocsLinkInclude<ExtArgs> | null
    /**
     * Filter, which DocsLink to fetch.
     */
    where: DocsLinkWhereUniqueInput
  }

  /**
   * DocsLink findFirst
   */
  export type DocsLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocsLink
     */
    select?: DocsLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocsLink
     */
    omit?: DocsLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocsLinkInclude<ExtArgs> | null
    /**
     * Filter, which DocsLink to fetch.
     */
    where?: DocsLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocsLinks to fetch.
     */
    orderBy?: DocsLinkOrderByWithRelationInput | DocsLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocsLinks.
     */
    cursor?: DocsLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocsLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocsLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocsLinks.
     */
    distinct?: DocsLinkScalarFieldEnum | DocsLinkScalarFieldEnum[]
  }

  /**
   * DocsLink findFirstOrThrow
   */
  export type DocsLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocsLink
     */
    select?: DocsLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocsLink
     */
    omit?: DocsLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocsLinkInclude<ExtArgs> | null
    /**
     * Filter, which DocsLink to fetch.
     */
    where?: DocsLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocsLinks to fetch.
     */
    orderBy?: DocsLinkOrderByWithRelationInput | DocsLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocsLinks.
     */
    cursor?: DocsLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocsLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocsLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocsLinks.
     */
    distinct?: DocsLinkScalarFieldEnum | DocsLinkScalarFieldEnum[]
  }

  /**
   * DocsLink findMany
   */
  export type DocsLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocsLink
     */
    select?: DocsLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocsLink
     */
    omit?: DocsLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocsLinkInclude<ExtArgs> | null
    /**
     * Filter, which DocsLinks to fetch.
     */
    where?: DocsLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocsLinks to fetch.
     */
    orderBy?: DocsLinkOrderByWithRelationInput | DocsLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocsLinks.
     */
    cursor?: DocsLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocsLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocsLinks.
     */
    skip?: number
    distinct?: DocsLinkScalarFieldEnum | DocsLinkScalarFieldEnum[]
  }

  /**
   * DocsLink create
   */
  export type DocsLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocsLink
     */
    select?: DocsLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocsLink
     */
    omit?: DocsLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocsLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a DocsLink.
     */
    data: XOR<DocsLinkCreateInput, DocsLinkUncheckedCreateInput>
  }

  /**
   * DocsLink createMany
   */
  export type DocsLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocsLinks.
     */
    data: DocsLinkCreateManyInput | DocsLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocsLink createManyAndReturn
   */
  export type DocsLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocsLink
     */
    select?: DocsLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocsLink
     */
    omit?: DocsLinkOmit<ExtArgs> | null
    /**
     * The data used to create many DocsLinks.
     */
    data: DocsLinkCreateManyInput | DocsLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocsLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocsLink update
   */
  export type DocsLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocsLink
     */
    select?: DocsLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocsLink
     */
    omit?: DocsLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocsLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a DocsLink.
     */
    data: XOR<DocsLinkUpdateInput, DocsLinkUncheckedUpdateInput>
    /**
     * Choose, which DocsLink to update.
     */
    where: DocsLinkWhereUniqueInput
  }

  /**
   * DocsLink updateMany
   */
  export type DocsLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocsLinks.
     */
    data: XOR<DocsLinkUpdateManyMutationInput, DocsLinkUncheckedUpdateManyInput>
    /**
     * Filter which DocsLinks to update
     */
    where?: DocsLinkWhereInput
    /**
     * Limit how many DocsLinks to update.
     */
    limit?: number
  }

  /**
   * DocsLink updateManyAndReturn
   */
  export type DocsLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocsLink
     */
    select?: DocsLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocsLink
     */
    omit?: DocsLinkOmit<ExtArgs> | null
    /**
     * The data used to update DocsLinks.
     */
    data: XOR<DocsLinkUpdateManyMutationInput, DocsLinkUncheckedUpdateManyInput>
    /**
     * Filter which DocsLinks to update
     */
    where?: DocsLinkWhereInput
    /**
     * Limit how many DocsLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocsLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocsLink upsert
   */
  export type DocsLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocsLink
     */
    select?: DocsLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocsLink
     */
    omit?: DocsLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocsLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the DocsLink to update in case it exists.
     */
    where: DocsLinkWhereUniqueInput
    /**
     * In case the DocsLink found by the `where` argument doesn't exist, create a new DocsLink with this data.
     */
    create: XOR<DocsLinkCreateInput, DocsLinkUncheckedCreateInput>
    /**
     * In case the DocsLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocsLinkUpdateInput, DocsLinkUncheckedUpdateInput>
  }

  /**
   * DocsLink delete
   */
  export type DocsLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocsLink
     */
    select?: DocsLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocsLink
     */
    omit?: DocsLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocsLinkInclude<ExtArgs> | null
    /**
     * Filter which DocsLink to delete.
     */
    where: DocsLinkWhereUniqueInput
  }

  /**
   * DocsLink deleteMany
   */
  export type DocsLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocsLinks to delete
     */
    where?: DocsLinkWhereInput
    /**
     * Limit how many DocsLinks to delete.
     */
    limit?: number
  }

  /**
   * DocsLink.posts
   */
  export type DocsLink$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaPost
     */
    select?: MediaPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaPost
     */
    omit?: MediaPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaPostInclude<ExtArgs> | null
    where?: MediaPostWhereInput
    orderBy?: MediaPostOrderByWithRelationInput | MediaPostOrderByWithRelationInput[]
    cursor?: MediaPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaPostScalarFieldEnum | MediaPostScalarFieldEnum[]
  }

  /**
   * DocsLink without action
   */
  export type DocsLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocsLink
     */
    select?: DocsLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocsLink
     */
    omit?: DocsLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocsLinkInclude<ExtArgs> | null
  }


  /**
   * Model Industry
   */

  export type AggregateIndustry = {
    _count: IndustryCountAggregateOutputType | null
    _min: IndustryMinAggregateOutputType | null
    _max: IndustryMaxAggregateOutputType | null
  }

  export type IndustryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IndustryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IndustryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IndustryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IndustryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IndustryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IndustryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Industry to aggregate.
     */
    where?: IndustryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Industries to fetch.
     */
    orderBy?: IndustryOrderByWithRelationInput | IndustryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IndustryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Industries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Industries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Industries
    **/
    _count?: true | IndustryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndustryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndustryMaxAggregateInputType
  }

  export type GetIndustryAggregateType<T extends IndustryAggregateArgs> = {
        [P in keyof T & keyof AggregateIndustry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndustry[P]>
      : GetScalarType<T[P], AggregateIndustry[P]>
  }




  export type IndustryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IndustryWhereInput
    orderBy?: IndustryOrderByWithAggregationInput | IndustryOrderByWithAggregationInput[]
    by: IndustryScalarFieldEnum[] | IndustryScalarFieldEnum
    having?: IndustryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndustryCountAggregateInputType | true
    _min?: IndustryMinAggregateInputType
    _max?: IndustryMaxAggregateInputType
  }

  export type IndustryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: IndustryCountAggregateOutputType | null
    _min: IndustryMinAggregateOutputType | null
    _max: IndustryMaxAggregateOutputType | null
  }

  type GetIndustryGroupByPayload<T extends IndustryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndustryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndustryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndustryGroupByOutputType[P]>
            : GetScalarType<T[P], IndustryGroupByOutputType[P]>
        }
      >
    >


  export type IndustrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    leads?: boolean | Industry$leadsArgs<ExtArgs>
    campaigns?: boolean | Industry$campaignsArgs<ExtArgs>
    _count?: boolean | IndustryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["industry"]>

  export type IndustrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["industry"]>

  export type IndustrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["industry"]>

  export type IndustrySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IndustryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["industry"]>
  export type IndustryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | Industry$leadsArgs<ExtArgs>
    campaigns?: boolean | Industry$campaignsArgs<ExtArgs>
    _count?: boolean | IndustryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IndustryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IndustryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IndustryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Industry"
    objects: {
      leads: Prisma.$LeadPayload<ExtArgs>[]
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["industry"]>
    composites: {}
  }

  type IndustryGetPayload<S extends boolean | null | undefined | IndustryDefaultArgs> = $Result.GetResult<Prisma.$IndustryPayload, S>

  type IndustryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IndustryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndustryCountAggregateInputType | true
    }

  export interface IndustryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Industry'], meta: { name: 'Industry' } }
    /**
     * Find zero or one Industry that matches the filter.
     * @param {IndustryFindUniqueArgs} args - Arguments to find a Industry
     * @example
     * // Get one Industry
     * const industry = await prisma.industry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IndustryFindUniqueArgs>(args: SelectSubset<T, IndustryFindUniqueArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Industry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IndustryFindUniqueOrThrowArgs} args - Arguments to find a Industry
     * @example
     * // Get one Industry
     * const industry = await prisma.industry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IndustryFindUniqueOrThrowArgs>(args: SelectSubset<T, IndustryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Industry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryFindFirstArgs} args - Arguments to find a Industry
     * @example
     * // Get one Industry
     * const industry = await prisma.industry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IndustryFindFirstArgs>(args?: SelectSubset<T, IndustryFindFirstArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Industry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryFindFirstOrThrowArgs} args - Arguments to find a Industry
     * @example
     * // Get one Industry
     * const industry = await prisma.industry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IndustryFindFirstOrThrowArgs>(args?: SelectSubset<T, IndustryFindFirstOrThrowArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Industries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Industries
     * const industries = await prisma.industry.findMany()
     * 
     * // Get first 10 Industries
     * const industries = await prisma.industry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const industryWithIdOnly = await prisma.industry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IndustryFindManyArgs>(args?: SelectSubset<T, IndustryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Industry.
     * @param {IndustryCreateArgs} args - Arguments to create a Industry.
     * @example
     * // Create one Industry
     * const Industry = await prisma.industry.create({
     *   data: {
     *     // ... data to create a Industry
     *   }
     * })
     * 
     */
    create<T extends IndustryCreateArgs>(args: SelectSubset<T, IndustryCreateArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Industries.
     * @param {IndustryCreateManyArgs} args - Arguments to create many Industries.
     * @example
     * // Create many Industries
     * const industry = await prisma.industry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IndustryCreateManyArgs>(args?: SelectSubset<T, IndustryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Industries and returns the data saved in the database.
     * @param {IndustryCreateManyAndReturnArgs} args - Arguments to create many Industries.
     * @example
     * // Create many Industries
     * const industry = await prisma.industry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Industries and only return the `id`
     * const industryWithIdOnly = await prisma.industry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IndustryCreateManyAndReturnArgs>(args?: SelectSubset<T, IndustryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Industry.
     * @param {IndustryDeleteArgs} args - Arguments to delete one Industry.
     * @example
     * // Delete one Industry
     * const Industry = await prisma.industry.delete({
     *   where: {
     *     // ... filter to delete one Industry
     *   }
     * })
     * 
     */
    delete<T extends IndustryDeleteArgs>(args: SelectSubset<T, IndustryDeleteArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Industry.
     * @param {IndustryUpdateArgs} args - Arguments to update one Industry.
     * @example
     * // Update one Industry
     * const industry = await prisma.industry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IndustryUpdateArgs>(args: SelectSubset<T, IndustryUpdateArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Industries.
     * @param {IndustryDeleteManyArgs} args - Arguments to filter Industries to delete.
     * @example
     * // Delete a few Industries
     * const { count } = await prisma.industry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IndustryDeleteManyArgs>(args?: SelectSubset<T, IndustryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Industries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Industries
     * const industry = await prisma.industry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IndustryUpdateManyArgs>(args: SelectSubset<T, IndustryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Industries and returns the data updated in the database.
     * @param {IndustryUpdateManyAndReturnArgs} args - Arguments to update many Industries.
     * @example
     * // Update many Industries
     * const industry = await prisma.industry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Industries and only return the `id`
     * const industryWithIdOnly = await prisma.industry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IndustryUpdateManyAndReturnArgs>(args: SelectSubset<T, IndustryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Industry.
     * @param {IndustryUpsertArgs} args - Arguments to update or create a Industry.
     * @example
     * // Update or create a Industry
     * const industry = await prisma.industry.upsert({
     *   create: {
     *     // ... data to create a Industry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Industry we want to update
     *   }
     * })
     */
    upsert<T extends IndustryUpsertArgs>(args: SelectSubset<T, IndustryUpsertArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Industries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryCountArgs} args - Arguments to filter Industries to count.
     * @example
     * // Count the number of Industries
     * const count = await prisma.industry.count({
     *   where: {
     *     // ... the filter for the Industries we want to count
     *   }
     * })
    **/
    count<T extends IndustryCountArgs>(
      args?: Subset<T, IndustryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndustryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Industry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IndustryAggregateArgs>(args: Subset<T, IndustryAggregateArgs>): Prisma.PrismaPromise<GetIndustryAggregateType<T>>

    /**
     * Group by Industry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndustryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IndustryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IndustryGroupByArgs['orderBy'] }
        : { orderBy?: IndustryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IndustryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndustryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Industry model
   */
  readonly fields: IndustryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Industry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IndustryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leads<T extends Industry$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Industry$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campaigns<T extends Industry$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, Industry$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Industry model
   */
  interface IndustryFieldRefs {
    readonly id: FieldRef<"Industry", 'String'>
    readonly name: FieldRef<"Industry", 'String'>
    readonly description: FieldRef<"Industry", 'String'>
    readonly isActive: FieldRef<"Industry", 'Boolean'>
    readonly createdAt: FieldRef<"Industry", 'DateTime'>
    readonly updatedAt: FieldRef<"Industry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Industry findUnique
   */
  export type IndustryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * Filter, which Industry to fetch.
     */
    where: IndustryWhereUniqueInput
  }

  /**
   * Industry findUniqueOrThrow
   */
  export type IndustryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * Filter, which Industry to fetch.
     */
    where: IndustryWhereUniqueInput
  }

  /**
   * Industry findFirst
   */
  export type IndustryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * Filter, which Industry to fetch.
     */
    where?: IndustryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Industries to fetch.
     */
    orderBy?: IndustryOrderByWithRelationInput | IndustryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Industries.
     */
    cursor?: IndustryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Industries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Industries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Industries.
     */
    distinct?: IndustryScalarFieldEnum | IndustryScalarFieldEnum[]
  }

  /**
   * Industry findFirstOrThrow
   */
  export type IndustryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * Filter, which Industry to fetch.
     */
    where?: IndustryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Industries to fetch.
     */
    orderBy?: IndustryOrderByWithRelationInput | IndustryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Industries.
     */
    cursor?: IndustryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Industries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Industries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Industries.
     */
    distinct?: IndustryScalarFieldEnum | IndustryScalarFieldEnum[]
  }

  /**
   * Industry findMany
   */
  export type IndustryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * Filter, which Industries to fetch.
     */
    where?: IndustryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Industries to fetch.
     */
    orderBy?: IndustryOrderByWithRelationInput | IndustryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Industries.
     */
    cursor?: IndustryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Industries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Industries.
     */
    skip?: number
    distinct?: IndustryScalarFieldEnum | IndustryScalarFieldEnum[]
  }

  /**
   * Industry create
   */
  export type IndustryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * The data needed to create a Industry.
     */
    data: XOR<IndustryCreateInput, IndustryUncheckedCreateInput>
  }

  /**
   * Industry createMany
   */
  export type IndustryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Industries.
     */
    data: IndustryCreateManyInput | IndustryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Industry createManyAndReturn
   */
  export type IndustryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * The data used to create many Industries.
     */
    data: IndustryCreateManyInput | IndustryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Industry update
   */
  export type IndustryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * The data needed to update a Industry.
     */
    data: XOR<IndustryUpdateInput, IndustryUncheckedUpdateInput>
    /**
     * Choose, which Industry to update.
     */
    where: IndustryWhereUniqueInput
  }

  /**
   * Industry updateMany
   */
  export type IndustryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Industries.
     */
    data: XOR<IndustryUpdateManyMutationInput, IndustryUncheckedUpdateManyInput>
    /**
     * Filter which Industries to update
     */
    where?: IndustryWhereInput
    /**
     * Limit how many Industries to update.
     */
    limit?: number
  }

  /**
   * Industry updateManyAndReturn
   */
  export type IndustryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * The data used to update Industries.
     */
    data: XOR<IndustryUpdateManyMutationInput, IndustryUncheckedUpdateManyInput>
    /**
     * Filter which Industries to update
     */
    where?: IndustryWhereInput
    /**
     * Limit how many Industries to update.
     */
    limit?: number
  }

  /**
   * Industry upsert
   */
  export type IndustryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * The filter to search for the Industry to update in case it exists.
     */
    where: IndustryWhereUniqueInput
    /**
     * In case the Industry found by the `where` argument doesn't exist, create a new Industry with this data.
     */
    create: XOR<IndustryCreateInput, IndustryUncheckedCreateInput>
    /**
     * In case the Industry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IndustryUpdateInput, IndustryUncheckedUpdateInput>
  }

  /**
   * Industry delete
   */
  export type IndustryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    /**
     * Filter which Industry to delete.
     */
    where: IndustryWhereUniqueInput
  }

  /**
   * Industry deleteMany
   */
  export type IndustryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Industries to delete
     */
    where?: IndustryWhereInput
    /**
     * Limit how many Industries to delete.
     */
    limit?: number
  }

  /**
   * Industry.leads
   */
  export type Industry$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Industry.campaigns
   */
  export type Industry$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Industry without action
   */
  export type IndustryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
  }


  /**
   * Model Lead
   */

  export type AggregateLead = {
    _count: LeadCountAggregateOutputType | null
    _avg: LeadAvgAggregateOutputType | null
    _sum: LeadSumAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  export type LeadAvgAggregateOutputType = {
    followerCount: number | null
    totalScore: number | null
  }

  export type LeadSumAggregateOutputType = {
    followerCount: number | null
    totalScore: number | null
  }

  export type LeadMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    platform: $Enums.EPlatform | null
    platformUrl: string | null
    profileUsername: string | null
    followerCount: number | null
    bio: string | null
    imageUrl: string | null
    website: string | null
    totalScore: number | null
    role: string | null
    status: $Enums.ELeadStatus | null
    industryId: string | null
    locationId: string | null
    campaignId: string | null
    scrapingJobId: string | null
    gmailThreadId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    platform: $Enums.EPlatform | null
    platformUrl: string | null
    profileUsername: string | null
    followerCount: number | null
    bio: string | null
    imageUrl: string | null
    website: string | null
    totalScore: number | null
    role: string | null
    status: $Enums.ELeadStatus | null
    industryId: string | null
    locationId: string | null
    campaignId: string | null
    scrapingJobId: string | null
    gmailThreadId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    platform: number
    platformUrl: number
    profileUsername: number
    followerCount: number
    bio: number
    imageUrl: number
    website: number
    totalScore: number
    role: number
    status: number
    industryId: number
    locationId: number
    campaignId: number
    scrapingJobId: number
    gmailThreadId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeadAvgAggregateInputType = {
    followerCount?: true
    totalScore?: true
  }

  export type LeadSumAggregateInputType = {
    followerCount?: true
    totalScore?: true
  }

  export type LeadMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    platform?: true
    platformUrl?: true
    profileUsername?: true
    followerCount?: true
    bio?: true
    imageUrl?: true
    website?: true
    totalScore?: true
    role?: true
    status?: true
    industryId?: true
    locationId?: true
    campaignId?: true
    scrapingJobId?: true
    gmailThreadId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    platform?: true
    platformUrl?: true
    profileUsername?: true
    followerCount?: true
    bio?: true
    imageUrl?: true
    website?: true
    totalScore?: true
    role?: true
    status?: true
    industryId?: true
    locationId?: true
    campaignId?: true
    scrapingJobId?: true
    gmailThreadId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    platform?: true
    platformUrl?: true
    profileUsername?: true
    followerCount?: true
    bio?: true
    imageUrl?: true
    website?: true
    totalScore?: true
    role?: true
    status?: true
    industryId?: true
    locationId?: true
    campaignId?: true
    scrapingJobId?: true
    gmailThreadId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lead to aggregate.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leads
    **/
    _count?: true | LeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadMaxAggregateInputType
  }

  export type GetLeadAggregateType<T extends LeadAggregateArgs> = {
        [P in keyof T & keyof AggregateLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLead[P]>
      : GetScalarType<T[P], AggregateLead[P]>
  }




  export type LeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithAggregationInput | LeadOrderByWithAggregationInput[]
    by: LeadScalarFieldEnum[] | LeadScalarFieldEnum
    having?: LeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadCountAggregateInputType | true
    _avg?: LeadAvgAggregateInputType
    _sum?: LeadSumAggregateInputType
    _min?: LeadMinAggregateInputType
    _max?: LeadMaxAggregateInputType
  }

  export type LeadGroupByOutputType = {
    id: string
    name: string
    email: string | null
    phone: string | null
    platform: $Enums.EPlatform
    platformUrl: string | null
    profileUsername: string | null
    followerCount: number
    bio: string | null
    imageUrl: string | null
    website: string | null
    totalScore: number | null
    role: string | null
    status: $Enums.ELeadStatus
    industryId: string | null
    locationId: string | null
    campaignId: string | null
    scrapingJobId: string | null
    gmailThreadId: string | null
    createdAt: Date
    updatedAt: Date
    _count: LeadCountAggregateOutputType | null
    _avg: LeadAvgAggregateOutputType | null
    _sum: LeadSumAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  type GetLeadGroupByPayload<T extends LeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadGroupByOutputType[P]>
            : GetScalarType<T[P], LeadGroupByOutputType[P]>
        }
      >
    >


  export type LeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    platform?: boolean
    platformUrl?: boolean
    profileUsername?: boolean
    followerCount?: boolean
    bio?: boolean
    imageUrl?: boolean
    website?: boolean
    totalScore?: boolean
    role?: boolean
    status?: boolean
    industryId?: boolean
    locationId?: boolean
    campaignId?: boolean
    scrapingJobId?: boolean
    gmailThreadId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    industry?: boolean | Lead$industryArgs<ExtArgs>
    location?: boolean | Lead$locationArgs<ExtArgs>
    campaign?: boolean | Lead$campaignArgs<ExtArgs>
    scrapingJob?: boolean | Lead$scrapingJobArgs<ExtArgs>
    outreachMessages?: boolean | Lead$outreachMessagesArgs<ExtArgs>
    meetings?: boolean | Lead$meetingsArgs<ExtArgs>
    _count?: boolean | LeadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    platform?: boolean
    platformUrl?: boolean
    profileUsername?: boolean
    followerCount?: boolean
    bio?: boolean
    imageUrl?: boolean
    website?: boolean
    totalScore?: boolean
    role?: boolean
    status?: boolean
    industryId?: boolean
    locationId?: boolean
    campaignId?: boolean
    scrapingJobId?: boolean
    gmailThreadId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    industry?: boolean | Lead$industryArgs<ExtArgs>
    location?: boolean | Lead$locationArgs<ExtArgs>
    campaign?: boolean | Lead$campaignArgs<ExtArgs>
    scrapingJob?: boolean | Lead$scrapingJobArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    platform?: boolean
    platformUrl?: boolean
    profileUsername?: boolean
    followerCount?: boolean
    bio?: boolean
    imageUrl?: boolean
    website?: boolean
    totalScore?: boolean
    role?: boolean
    status?: boolean
    industryId?: boolean
    locationId?: boolean
    campaignId?: boolean
    scrapingJobId?: boolean
    gmailThreadId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    industry?: boolean | Lead$industryArgs<ExtArgs>
    location?: boolean | Lead$locationArgs<ExtArgs>
    campaign?: boolean | Lead$campaignArgs<ExtArgs>
    scrapingJob?: boolean | Lead$scrapingJobArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    platform?: boolean
    platformUrl?: boolean
    profileUsername?: boolean
    followerCount?: boolean
    bio?: boolean
    imageUrl?: boolean
    website?: boolean
    totalScore?: boolean
    role?: boolean
    status?: boolean
    industryId?: boolean
    locationId?: boolean
    campaignId?: boolean
    scrapingJobId?: boolean
    gmailThreadId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "platform" | "platformUrl" | "profileUsername" | "followerCount" | "bio" | "imageUrl" | "website" | "totalScore" | "role" | "status" | "industryId" | "locationId" | "campaignId" | "scrapingJobId" | "gmailThreadId" | "createdAt" | "updatedAt", ExtArgs["result"]["lead"]>
  export type LeadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    industry?: boolean | Lead$industryArgs<ExtArgs>
    location?: boolean | Lead$locationArgs<ExtArgs>
    campaign?: boolean | Lead$campaignArgs<ExtArgs>
    scrapingJob?: boolean | Lead$scrapingJobArgs<ExtArgs>
    outreachMessages?: boolean | Lead$outreachMessagesArgs<ExtArgs>
    meetings?: boolean | Lead$meetingsArgs<ExtArgs>
    _count?: boolean | LeadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    industry?: boolean | Lead$industryArgs<ExtArgs>
    location?: boolean | Lead$locationArgs<ExtArgs>
    campaign?: boolean | Lead$campaignArgs<ExtArgs>
    scrapingJob?: boolean | Lead$scrapingJobArgs<ExtArgs>
  }
  export type LeadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    industry?: boolean | Lead$industryArgs<ExtArgs>
    location?: boolean | Lead$locationArgs<ExtArgs>
    campaign?: boolean | Lead$campaignArgs<ExtArgs>
    scrapingJob?: boolean | Lead$scrapingJobArgs<ExtArgs>
  }

  export type $LeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lead"
    objects: {
      industry: Prisma.$IndustryPayload<ExtArgs> | null
      location: Prisma.$LocationPayload<ExtArgs> | null
      campaign: Prisma.$CampaignPayload<ExtArgs> | null
      scrapingJob: Prisma.$ScrapingJobPayload<ExtArgs> | null
      outreachMessages: Prisma.$OutreachMessagePayload<ExtArgs>[]
      meetings: Prisma.$MeetingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      phone: string | null
      platform: $Enums.EPlatform
      platformUrl: string | null
      profileUsername: string | null
      followerCount: number
      bio: string | null
      imageUrl: string | null
      website: string | null
      totalScore: number | null
      role: string | null
      status: $Enums.ELeadStatus
      industryId: string | null
      locationId: string | null
      campaignId: string | null
      scrapingJobId: string | null
      gmailThreadId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lead"]>
    composites: {}
  }

  type LeadGetPayload<S extends boolean | null | undefined | LeadDefaultArgs> = $Result.GetResult<Prisma.$LeadPayload, S>

  type LeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadCountAggregateInputType | true
    }

  export interface LeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lead'], meta: { name: 'Lead' } }
    /**
     * Find zero or one Lead that matches the filter.
     * @param {LeadFindUniqueArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadFindUniqueArgs>(args: SelectSubset<T, LeadFindUniqueArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadFindUniqueOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadFindFirstArgs>(args?: SelectSubset<T, LeadFindFirstArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.lead.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.lead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadWithIdOnly = await prisma.lead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadFindManyArgs>(args?: SelectSubset<T, LeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lead.
     * @param {LeadCreateArgs} args - Arguments to create a Lead.
     * @example
     * // Create one Lead
     * const Lead = await prisma.lead.create({
     *   data: {
     *     // ... data to create a Lead
     *   }
     * })
     * 
     */
    create<T extends LeadCreateArgs>(args: SelectSubset<T, LeadCreateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leads.
     * @param {LeadCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadCreateManyArgs>(args?: SelectSubset<T, LeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {LeadCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lead.
     * @param {LeadDeleteArgs} args - Arguments to delete one Lead.
     * @example
     * // Delete one Lead
     * const Lead = await prisma.lead.delete({
     *   where: {
     *     // ... filter to delete one Lead
     *   }
     * })
     * 
     */
    delete<T extends LeadDeleteArgs>(args: SelectSubset<T, LeadDeleteArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lead.
     * @param {LeadUpdateArgs} args - Arguments to update one Lead.
     * @example
     * // Update one Lead
     * const lead = await prisma.lead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadUpdateArgs>(args: SelectSubset<T, LeadUpdateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leads.
     * @param {LeadDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.lead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadDeleteManyArgs>(args?: SelectSubset<T, LeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadUpdateManyArgs>(args: SelectSubset<T, LeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads and returns the data updated in the database.
     * @param {LeadUpdateManyAndReturnArgs} args - Arguments to update many Leads.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeadUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lead.
     * @param {LeadUpsertArgs} args - Arguments to update or create a Lead.
     * @example
     * // Update or create a Lead
     * const lead = await prisma.lead.upsert({
     *   create: {
     *     // ... data to create a Lead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lead we want to update
     *   }
     * })
     */
    upsert<T extends LeadUpsertArgs>(args: SelectSubset<T, LeadUpsertArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.lead.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends LeadCountArgs>(
      args?: Subset<T, LeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadAggregateArgs>(args: Subset<T, LeadAggregateArgs>): Prisma.PrismaPromise<GetLeadAggregateType<T>>

    /**
     * Group by Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadGroupByArgs['orderBy'] }
        : { orderBy?: LeadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lead model
   */
  readonly fields: LeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    industry<T extends Lead$industryArgs<ExtArgs> = {}>(args?: Subset<T, Lead$industryArgs<ExtArgs>>): Prisma__IndustryClient<$Result.GetResult<Prisma.$IndustryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    location<T extends Lead$locationArgs<ExtArgs> = {}>(args?: Subset<T, Lead$locationArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    campaign<T extends Lead$campaignArgs<ExtArgs> = {}>(args?: Subset<T, Lead$campaignArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    scrapingJob<T extends Lead$scrapingJobArgs<ExtArgs> = {}>(args?: Subset<T, Lead$scrapingJobArgs<ExtArgs>>): Prisma__ScrapingJobClient<$Result.GetResult<Prisma.$ScrapingJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    outreachMessages<T extends Lead$outreachMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Lead$outreachMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutreachMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meetings<T extends Lead$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, Lead$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lead model
   */
  interface LeadFieldRefs {
    readonly id: FieldRef<"Lead", 'String'>
    readonly name: FieldRef<"Lead", 'String'>
    readonly email: FieldRef<"Lead", 'String'>
    readonly phone: FieldRef<"Lead", 'String'>
    readonly platform: FieldRef<"Lead", 'EPlatform'>
    readonly platformUrl: FieldRef<"Lead", 'String'>
    readonly profileUsername: FieldRef<"Lead", 'String'>
    readonly followerCount: FieldRef<"Lead", 'Int'>
    readonly bio: FieldRef<"Lead", 'String'>
    readonly imageUrl: FieldRef<"Lead", 'String'>
    readonly website: FieldRef<"Lead", 'String'>
    readonly totalScore: FieldRef<"Lead", 'Float'>
    readonly role: FieldRef<"Lead", 'String'>
    readonly status: FieldRef<"Lead", 'ELeadStatus'>
    readonly industryId: FieldRef<"Lead", 'String'>
    readonly locationId: FieldRef<"Lead", 'String'>
    readonly campaignId: FieldRef<"Lead", 'String'>
    readonly scrapingJobId: FieldRef<"Lead", 'String'>
    readonly gmailThreadId: FieldRef<"Lead", 'String'>
    readonly createdAt: FieldRef<"Lead", 'DateTime'>
    readonly updatedAt: FieldRef<"Lead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lead findUnique
   */
  export type LeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findUniqueOrThrow
   */
  export type LeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findFirst
   */
  export type LeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findFirstOrThrow
   */
  export type LeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findMany
   */
  export type LeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead create
   */
  export type LeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to create a Lead.
     */
    data: XOR<LeadCreateInput, LeadUncheckedCreateInput>
  }

  /**
   * Lead createMany
   */
  export type LeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lead createManyAndReturn
   */
  export type LeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead update
   */
  export type LeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to update a Lead.
     */
    data: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
    /**
     * Choose, which Lead to update.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead updateMany
   */
  export type LeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
  }

  /**
   * Lead updateManyAndReturn
   */
  export type LeadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead upsert
   */
  export type LeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The filter to search for the Lead to update in case it exists.
     */
    where: LeadWhereUniqueInput
    /**
     * In case the Lead found by the `where` argument doesn't exist, create a new Lead with this data.
     */
    create: XOR<LeadCreateInput, LeadUncheckedCreateInput>
    /**
     * In case the Lead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
  }

  /**
   * Lead delete
   */
  export type LeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter which Lead to delete.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead deleteMany
   */
  export type LeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to delete
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to delete.
     */
    limit?: number
  }

  /**
   * Lead.industry
   */
  export type Lead$industryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Industry
     */
    select?: IndustrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Industry
     */
    omit?: IndustryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IndustryInclude<ExtArgs> | null
    where?: IndustryWhereInput
  }

  /**
   * Lead.location
   */
  export type Lead$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
  }

  /**
   * Lead.campaign
   */
  export type Lead$campaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
  }

  /**
   * Lead.scrapingJob
   */
  export type Lead$scrapingJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapingJob
     */
    omit?: ScrapingJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapingJobInclude<ExtArgs> | null
    where?: ScrapingJobWhereInput
  }

  /**
   * Lead.outreachMessages
   */
  export type Lead$outreachMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutreachMessage
     */
    select?: OutreachMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutreachMessage
     */
    omit?: OutreachMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutreachMessageInclude<ExtArgs> | null
    where?: OutreachMessageWhereInput
    orderBy?: OutreachMessageOrderByWithRelationInput | OutreachMessageOrderByWithRelationInput[]
    cursor?: OutreachMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutreachMessageScalarFieldEnum | OutreachMessageScalarFieldEnum[]
  }

  /**
   * Lead.meetings
   */
  export type Lead$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    cursor?: MeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Lead without action
   */
  export type LeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    city: string | null
    state: string | null
    country: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    city: string | null
    state: string | null
    country: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    city: number
    state: number
    country: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocationMinAggregateInputType = {
    id?: true
    city?: true
    state?: true
    country?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    city?: true
    state?: true
    country?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    city?: true
    state?: true
    country?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    city: string
    state: string | null
    country: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    leads?: boolean | Location$leadsArgs<ExtArgs>
    campaigns?: boolean | Location$campaignsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "city" | "state" | "country" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | Location$leadsArgs<ExtArgs>
    campaigns?: boolean | Location$campaignsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      leads: Prisma.$LeadPayload<ExtArgs>[]
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      city: string
      state: string | null
      country: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leads<T extends Location$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Location$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    campaigns<T extends Location$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, Location$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'String'>
    readonly city: FieldRef<"Location", 'String'>
    readonly state: FieldRef<"Location", 'String'>
    readonly country: FieldRef<"Location", 'String'>
    readonly isActive: FieldRef<"Location", 'Boolean'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
    readonly updatedAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.leads
   */
  export type Location$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Location.campaigns
   */
  export type Location$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model MediaPost
   */

  export type AggregateMediaPost = {
    _count: MediaPostCountAggregateOutputType | null
    _min: MediaPostMinAggregateOutputType | null
    _max: MediaPostMaxAggregateOutputType | null
  }

  export type MediaPostMinAggregateOutputType = {
    id: string | null
    heading: string | null
    body: string | null
    postTime: Date | null
    status: $Enums.EMediaPostStatus | null
    docsLinkId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaPostMaxAggregateOutputType = {
    id: string | null
    heading: string | null
    body: string | null
    postTime: Date | null
    status: $Enums.EMediaPostStatus | null
    docsLinkId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaPostCountAggregateOutputType = {
    id: number
    heading: number
    body: number
    postTime: number
    status: number
    docsLinkId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MediaPostMinAggregateInputType = {
    id?: true
    heading?: true
    body?: true
    postTime?: true
    status?: true
    docsLinkId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaPostMaxAggregateInputType = {
    id?: true
    heading?: true
    body?: true
    postTime?: true
    status?: true
    docsLinkId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaPostCountAggregateInputType = {
    id?: true
    heading?: true
    body?: true
    postTime?: true
    status?: true
    docsLinkId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MediaPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaPost to aggregate.
     */
    where?: MediaPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaPosts to fetch.
     */
    orderBy?: MediaPostOrderByWithRelationInput | MediaPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaPosts
    **/
    _count?: true | MediaPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaPostMaxAggregateInputType
  }

  export type GetMediaPostAggregateType<T extends MediaPostAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaPost[P]>
      : GetScalarType<T[P], AggregateMediaPost[P]>
  }




  export type MediaPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaPostWhereInput
    orderBy?: MediaPostOrderByWithAggregationInput | MediaPostOrderByWithAggregationInput[]
    by: MediaPostScalarFieldEnum[] | MediaPostScalarFieldEnum
    having?: MediaPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaPostCountAggregateInputType | true
    _min?: MediaPostMinAggregateInputType
    _max?: MediaPostMaxAggregateInputType
  }

  export type MediaPostGroupByOutputType = {
    id: string
    heading: string
    body: string
    postTime: Date
    status: $Enums.EMediaPostStatus
    docsLinkId: string
    createdAt: Date
    updatedAt: Date
    _count: MediaPostCountAggregateOutputType | null
    _min: MediaPostMinAggregateOutputType | null
    _max: MediaPostMaxAggregateOutputType | null
  }

  type GetMediaPostGroupByPayload<T extends MediaPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaPostGroupByOutputType[P]>
            : GetScalarType<T[P], MediaPostGroupByOutputType[P]>
        }
      >
    >


  export type MediaPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heading?: boolean
    body?: boolean
    postTime?: boolean
    status?: boolean
    docsLinkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    docsLink?: boolean | DocsLinkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaPost"]>

  export type MediaPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heading?: boolean
    body?: boolean
    postTime?: boolean
    status?: boolean
    docsLinkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    docsLink?: boolean | DocsLinkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaPost"]>

  export type MediaPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heading?: boolean
    body?: boolean
    postTime?: boolean
    status?: boolean
    docsLinkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    docsLink?: boolean | DocsLinkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaPost"]>

  export type MediaPostSelectScalar = {
    id?: boolean
    heading?: boolean
    body?: boolean
    postTime?: boolean
    status?: boolean
    docsLinkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MediaPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "heading" | "body" | "postTime" | "status" | "docsLinkId" | "createdAt" | "updatedAt", ExtArgs["result"]["mediaPost"]>
  export type MediaPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docsLink?: boolean | DocsLinkDefaultArgs<ExtArgs>
  }
  export type MediaPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docsLink?: boolean | DocsLinkDefaultArgs<ExtArgs>
  }
  export type MediaPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    docsLink?: boolean | DocsLinkDefaultArgs<ExtArgs>
  }

  export type $MediaPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaPost"
    objects: {
      docsLink: Prisma.$DocsLinkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      heading: string
      body: string
      postTime: Date
      status: $Enums.EMediaPostStatus
      docsLinkId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mediaPost"]>
    composites: {}
  }

  type MediaPostGetPayload<S extends boolean | null | undefined | MediaPostDefaultArgs> = $Result.GetResult<Prisma.$MediaPostPayload, S>

  type MediaPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaPostCountAggregateInputType | true
    }

  export interface MediaPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaPost'], meta: { name: 'MediaPost' } }
    /**
     * Find zero or one MediaPost that matches the filter.
     * @param {MediaPostFindUniqueArgs} args - Arguments to find a MediaPost
     * @example
     * // Get one MediaPost
     * const mediaPost = await prisma.mediaPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaPostFindUniqueArgs>(args: SelectSubset<T, MediaPostFindUniqueArgs<ExtArgs>>): Prisma__MediaPostClient<$Result.GetResult<Prisma.$MediaPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MediaPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaPostFindUniqueOrThrowArgs} args - Arguments to find a MediaPost
     * @example
     * // Get one MediaPost
     * const mediaPost = await prisma.mediaPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaPostFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaPostClient<$Result.GetResult<Prisma.$MediaPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaPostFindFirstArgs} args - Arguments to find a MediaPost
     * @example
     * // Get one MediaPost
     * const mediaPost = await prisma.mediaPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaPostFindFirstArgs>(args?: SelectSubset<T, MediaPostFindFirstArgs<ExtArgs>>): Prisma__MediaPostClient<$Result.GetResult<Prisma.$MediaPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaPostFindFirstOrThrowArgs} args - Arguments to find a MediaPost
     * @example
     * // Get one MediaPost
     * const mediaPost = await prisma.mediaPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaPostFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaPostClient<$Result.GetResult<Prisma.$MediaPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MediaPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaPosts
     * const mediaPosts = await prisma.mediaPost.findMany()
     * 
     * // Get first 10 MediaPosts
     * const mediaPosts = await prisma.mediaPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaPostWithIdOnly = await prisma.mediaPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaPostFindManyArgs>(args?: SelectSubset<T, MediaPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MediaPost.
     * @param {MediaPostCreateArgs} args - Arguments to create a MediaPost.
     * @example
     * // Create one MediaPost
     * const MediaPost = await prisma.mediaPost.create({
     *   data: {
     *     // ... data to create a MediaPost
     *   }
     * })
     * 
     */
    create<T extends MediaPostCreateArgs>(args: SelectSubset<T, MediaPostCreateArgs<ExtArgs>>): Prisma__MediaPostClient<$Result.GetResult<Prisma.$MediaPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MediaPosts.
     * @param {MediaPostCreateManyArgs} args - Arguments to create many MediaPosts.
     * @example
     * // Create many MediaPosts
     * const mediaPost = await prisma.mediaPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaPostCreateManyArgs>(args?: SelectSubset<T, MediaPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MediaPosts and returns the data saved in the database.
     * @param {MediaPostCreateManyAndReturnArgs} args - Arguments to create many MediaPosts.
     * @example
     * // Create many MediaPosts
     * const mediaPost = await prisma.mediaPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MediaPosts and only return the `id`
     * const mediaPostWithIdOnly = await prisma.mediaPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaPostCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MediaPost.
     * @param {MediaPostDeleteArgs} args - Arguments to delete one MediaPost.
     * @example
     * // Delete one MediaPost
     * const MediaPost = await prisma.mediaPost.delete({
     *   where: {
     *     // ... filter to delete one MediaPost
     *   }
     * })
     * 
     */
    delete<T extends MediaPostDeleteArgs>(args: SelectSubset<T, MediaPostDeleteArgs<ExtArgs>>): Prisma__MediaPostClient<$Result.GetResult<Prisma.$MediaPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MediaPost.
     * @param {MediaPostUpdateArgs} args - Arguments to update one MediaPost.
     * @example
     * // Update one MediaPost
     * const mediaPost = await prisma.mediaPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaPostUpdateArgs>(args: SelectSubset<T, MediaPostUpdateArgs<ExtArgs>>): Prisma__MediaPostClient<$Result.GetResult<Prisma.$MediaPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MediaPosts.
     * @param {MediaPostDeleteManyArgs} args - Arguments to filter MediaPosts to delete.
     * @example
     * // Delete a few MediaPosts
     * const { count } = await prisma.mediaPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaPostDeleteManyArgs>(args?: SelectSubset<T, MediaPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaPosts
     * const mediaPost = await prisma.mediaPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaPostUpdateManyArgs>(args: SelectSubset<T, MediaPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaPosts and returns the data updated in the database.
     * @param {MediaPostUpdateManyAndReturnArgs} args - Arguments to update many MediaPosts.
     * @example
     * // Update many MediaPosts
     * const mediaPost = await prisma.mediaPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MediaPosts and only return the `id`
     * const mediaPostWithIdOnly = await prisma.mediaPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaPostUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MediaPost.
     * @param {MediaPostUpsertArgs} args - Arguments to update or create a MediaPost.
     * @example
     * // Update or create a MediaPost
     * const mediaPost = await prisma.mediaPost.upsert({
     *   create: {
     *     // ... data to create a MediaPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaPost we want to update
     *   }
     * })
     */
    upsert<T extends MediaPostUpsertArgs>(args: SelectSubset<T, MediaPostUpsertArgs<ExtArgs>>): Prisma__MediaPostClient<$Result.GetResult<Prisma.$MediaPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MediaPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaPostCountArgs} args - Arguments to filter MediaPosts to count.
     * @example
     * // Count the number of MediaPosts
     * const count = await prisma.mediaPost.count({
     *   where: {
     *     // ... the filter for the MediaPosts we want to count
     *   }
     * })
    **/
    count<T extends MediaPostCountArgs>(
      args?: Subset<T, MediaPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaPostAggregateArgs>(args: Subset<T, MediaPostAggregateArgs>): Prisma.PrismaPromise<GetMediaPostAggregateType<T>>

    /**
     * Group by MediaPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaPostGroupByArgs['orderBy'] }
        : { orderBy?: MediaPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaPost model
   */
  readonly fields: MediaPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    docsLink<T extends DocsLinkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocsLinkDefaultArgs<ExtArgs>>): Prisma__DocsLinkClient<$Result.GetResult<Prisma.$DocsLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MediaPost model
   */
  interface MediaPostFieldRefs {
    readonly id: FieldRef<"MediaPost", 'String'>
    readonly heading: FieldRef<"MediaPost", 'String'>
    readonly body: FieldRef<"MediaPost", 'String'>
    readonly postTime: FieldRef<"MediaPost", 'DateTime'>
    readonly status: FieldRef<"MediaPost", 'EMediaPostStatus'>
    readonly docsLinkId: FieldRef<"MediaPost", 'String'>
    readonly createdAt: FieldRef<"MediaPost", 'DateTime'>
    readonly updatedAt: FieldRef<"MediaPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MediaPost findUnique
   */
  export type MediaPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaPost
     */
    select?: MediaPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaPost
     */
    omit?: MediaPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaPostInclude<ExtArgs> | null
    /**
     * Filter, which MediaPost to fetch.
     */
    where: MediaPostWhereUniqueInput
  }

  /**
   * MediaPost findUniqueOrThrow
   */
  export type MediaPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaPost
     */
    select?: MediaPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaPost
     */
    omit?: MediaPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaPostInclude<ExtArgs> | null
    /**
     * Filter, which MediaPost to fetch.
     */
    where: MediaPostWhereUniqueInput
  }

  /**
   * MediaPost findFirst
   */
  export type MediaPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaPost
     */
    select?: MediaPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaPost
     */
    omit?: MediaPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaPostInclude<ExtArgs> | null
    /**
     * Filter, which MediaPost to fetch.
     */
    where?: MediaPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaPosts to fetch.
     */
    orderBy?: MediaPostOrderByWithRelationInput | MediaPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaPosts.
     */
    cursor?: MediaPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaPosts.
     */
    distinct?: MediaPostScalarFieldEnum | MediaPostScalarFieldEnum[]
  }

  /**
   * MediaPost findFirstOrThrow
   */
  export type MediaPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaPost
     */
    select?: MediaPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaPost
     */
    omit?: MediaPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaPostInclude<ExtArgs> | null
    /**
     * Filter, which MediaPost to fetch.
     */
    where?: MediaPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaPosts to fetch.
     */
    orderBy?: MediaPostOrderByWithRelationInput | MediaPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaPosts.
     */
    cursor?: MediaPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaPosts.
     */
    distinct?: MediaPostScalarFieldEnum | MediaPostScalarFieldEnum[]
  }

  /**
   * MediaPost findMany
   */
  export type MediaPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaPost
     */
    select?: MediaPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaPost
     */
    omit?: MediaPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaPostInclude<ExtArgs> | null
    /**
     * Filter, which MediaPosts to fetch.
     */
    where?: MediaPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaPosts to fetch.
     */
    orderBy?: MediaPostOrderByWithRelationInput | MediaPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaPosts.
     */
    cursor?: MediaPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaPosts.
     */
    skip?: number
    distinct?: MediaPostScalarFieldEnum | MediaPostScalarFieldEnum[]
  }

  /**
   * MediaPost create
   */
  export type MediaPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaPost
     */
    select?: MediaPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaPost
     */
    omit?: MediaPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaPostInclude<ExtArgs> | null
    /**
     * The data needed to create a MediaPost.
     */
    data: XOR<MediaPostCreateInput, MediaPostUncheckedCreateInput>
  }

  /**
   * MediaPost createMany
   */
  export type MediaPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaPosts.
     */
    data: MediaPostCreateManyInput | MediaPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MediaPost createManyAndReturn
   */
  export type MediaPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaPost
     */
    select?: MediaPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaPost
     */
    omit?: MediaPostOmit<ExtArgs> | null
    /**
     * The data used to create many MediaPosts.
     */
    data: MediaPostCreateManyInput | MediaPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediaPost update
   */
  export type MediaPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaPost
     */
    select?: MediaPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaPost
     */
    omit?: MediaPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaPostInclude<ExtArgs> | null
    /**
     * The data needed to update a MediaPost.
     */
    data: XOR<MediaPostUpdateInput, MediaPostUncheckedUpdateInput>
    /**
     * Choose, which MediaPost to update.
     */
    where: MediaPostWhereUniqueInput
  }

  /**
   * MediaPost updateMany
   */
  export type MediaPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaPosts.
     */
    data: XOR<MediaPostUpdateManyMutationInput, MediaPostUncheckedUpdateManyInput>
    /**
     * Filter which MediaPosts to update
     */
    where?: MediaPostWhereInput
    /**
     * Limit how many MediaPosts to update.
     */
    limit?: number
  }

  /**
   * MediaPost updateManyAndReturn
   */
  export type MediaPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaPost
     */
    select?: MediaPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaPost
     */
    omit?: MediaPostOmit<ExtArgs> | null
    /**
     * The data used to update MediaPosts.
     */
    data: XOR<MediaPostUpdateManyMutationInput, MediaPostUncheckedUpdateManyInput>
    /**
     * Filter which MediaPosts to update
     */
    where?: MediaPostWhereInput
    /**
     * Limit how many MediaPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediaPost upsert
   */
  export type MediaPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaPost
     */
    select?: MediaPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaPost
     */
    omit?: MediaPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaPostInclude<ExtArgs> | null
    /**
     * The filter to search for the MediaPost to update in case it exists.
     */
    where: MediaPostWhereUniqueInput
    /**
     * In case the MediaPost found by the `where` argument doesn't exist, create a new MediaPost with this data.
     */
    create: XOR<MediaPostCreateInput, MediaPostUncheckedCreateInput>
    /**
     * In case the MediaPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaPostUpdateInput, MediaPostUncheckedUpdateInput>
  }

  /**
   * MediaPost delete
   */
  export type MediaPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaPost
     */
    select?: MediaPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaPost
     */
    omit?: MediaPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaPostInclude<ExtArgs> | null
    /**
     * Filter which MediaPost to delete.
     */
    where: MediaPostWhereUniqueInput
  }

  /**
   * MediaPost deleteMany
   */
  export type MediaPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaPosts to delete
     */
    where?: MediaPostWhereInput
    /**
     * Limit how many MediaPosts to delete.
     */
    limit?: number
  }

  /**
   * MediaPost without action
   */
  export type MediaPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaPost
     */
    select?: MediaPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaPost
     */
    omit?: MediaPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaPostInclude<ExtArgs> | null
  }


  /**
   * Model Meeting
   */

  export type AggregateMeeting = {
    _count: MeetingCountAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  export type MeetingMinAggregateOutputType = {
    id: string | null
    title: string | null
    leadId: string | null
    campaignId: string | null
    startTime: Date | null
    endTime: Date | null
    meetingLink: string | null
    status: $Enums.EMeetingStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeetingMaxAggregateOutputType = {
    id: string | null
    title: string | null
    leadId: string | null
    campaignId: string | null
    startTime: Date | null
    endTime: Date | null
    meetingLink: string | null
    status: $Enums.EMeetingStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeetingCountAggregateOutputType = {
    id: number
    title: number
    leadId: number
    campaignId: number
    startTime: number
    endTime: number
    meetingLink: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MeetingMinAggregateInputType = {
    id?: true
    title?: true
    leadId?: true
    campaignId?: true
    startTime?: true
    endTime?: true
    meetingLink?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeetingMaxAggregateInputType = {
    id?: true
    title?: true
    leadId?: true
    campaignId?: true
    startTime?: true
    endTime?: true
    meetingLink?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeetingCountAggregateInputType = {
    id?: true
    title?: true
    leadId?: true
    campaignId?: true
    startTime?: true
    endTime?: true
    meetingLink?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MeetingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meeting to aggregate.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meetings
    **/
    _count?: true | MeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingMaxAggregateInputType
  }

  export type GetMeetingAggregateType<T extends MeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeeting[P]>
      : GetScalarType<T[P], AggregateMeeting[P]>
  }




  export type MeetingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithAggregationInput | MeetingOrderByWithAggregationInput[]
    by: MeetingScalarFieldEnum[] | MeetingScalarFieldEnum
    having?: MeetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingCountAggregateInputType | true
    _min?: MeetingMinAggregateInputType
    _max?: MeetingMaxAggregateInputType
  }

  export type MeetingGroupByOutputType = {
    id: string
    title: string
    leadId: string
    campaignId: string | null
    startTime: Date
    endTime: Date
    meetingLink: string | null
    status: $Enums.EMeetingStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: MeetingCountAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  type GetMeetingGroupByPayload<T extends MeetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingGroupByOutputType[P]>
        }
      >
    >


  export type MeetingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    leadId?: boolean
    campaignId?: boolean
    startTime?: boolean
    endTime?: boolean
    meetingLink?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    campaign?: boolean | Meeting$campaignArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    leadId?: boolean
    campaignId?: boolean
    startTime?: boolean
    endTime?: boolean
    meetingLink?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    campaign?: boolean | Meeting$campaignArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    leadId?: boolean
    campaignId?: boolean
    startTime?: boolean
    endTime?: boolean
    meetingLink?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    campaign?: boolean | Meeting$campaignArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectScalar = {
    id?: boolean
    title?: boolean
    leadId?: boolean
    campaignId?: boolean
    startTime?: boolean
    endTime?: boolean
    meetingLink?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MeetingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "leadId" | "campaignId" | "startTime" | "endTime" | "meetingLink" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["meeting"]>
  export type MeetingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    campaign?: boolean | Meeting$campaignArgs<ExtArgs>
  }
  export type MeetingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    campaign?: boolean | Meeting$campaignArgs<ExtArgs>
  }
  export type MeetingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    campaign?: boolean | Meeting$campaignArgs<ExtArgs>
  }

  export type $MeetingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meeting"
    objects: {
      lead: Prisma.$LeadPayload<ExtArgs>
      campaign: Prisma.$CampaignPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      leadId: string
      campaignId: string | null
      startTime: Date
      endTime: Date
      meetingLink: string | null
      status: $Enums.EMeetingStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["meeting"]>
    composites: {}
  }

  type MeetingGetPayload<S extends boolean | null | undefined | MeetingDefaultArgs> = $Result.GetResult<Prisma.$MeetingPayload, S>

  type MeetingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeetingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingCountAggregateInputType | true
    }

  export interface MeetingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meeting'], meta: { name: 'Meeting' } }
    /**
     * Find zero or one Meeting that matches the filter.
     * @param {MeetingFindUniqueArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingFindUniqueArgs>(args: SelectSubset<T, MeetingFindUniqueArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meeting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeetingFindUniqueOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingFindFirstArgs>(args?: SelectSubset<T, MeetingFindFirstArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetings
     * const meetings = await prisma.meeting.findMany()
     * 
     * // Get first 10 Meetings
     * const meetings = await prisma.meeting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingWithIdOnly = await prisma.meeting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeetingFindManyArgs>(args?: SelectSubset<T, MeetingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meeting.
     * @param {MeetingCreateArgs} args - Arguments to create a Meeting.
     * @example
     * // Create one Meeting
     * const Meeting = await prisma.meeting.create({
     *   data: {
     *     // ... data to create a Meeting
     *   }
     * })
     * 
     */
    create<T extends MeetingCreateArgs>(args: SelectSubset<T, MeetingCreateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meetings.
     * @param {MeetingCreateManyArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingCreateManyArgs>(args?: SelectSubset<T, MeetingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meetings and returns the data saved in the database.
     * @param {MeetingCreateManyAndReturnArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meetings and only return the `id`
     * const meetingWithIdOnly = await prisma.meeting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetingCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meeting.
     * @param {MeetingDeleteArgs} args - Arguments to delete one Meeting.
     * @example
     * // Delete one Meeting
     * const Meeting = await prisma.meeting.delete({
     *   where: {
     *     // ... filter to delete one Meeting
     *   }
     * })
     * 
     */
    delete<T extends MeetingDeleteArgs>(args: SelectSubset<T, MeetingDeleteArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meeting.
     * @param {MeetingUpdateArgs} args - Arguments to update one Meeting.
     * @example
     * // Update one Meeting
     * const meeting = await prisma.meeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingUpdateArgs>(args: SelectSubset<T, MeetingUpdateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meetings.
     * @param {MeetingDeleteManyArgs} args - Arguments to filter Meetings to delete.
     * @example
     * // Delete a few Meetings
     * const { count } = await prisma.meeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingDeleteManyArgs>(args?: SelectSubset<T, MeetingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingUpdateManyArgs>(args: SelectSubset<T, MeetingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings and returns the data updated in the database.
     * @param {MeetingUpdateManyAndReturnArgs} args - Arguments to update many Meetings.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meetings and only return the `id`
     * const meetingWithIdOnly = await prisma.meeting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MeetingUpdateManyAndReturnArgs>(args: SelectSubset<T, MeetingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meeting.
     * @param {MeetingUpsertArgs} args - Arguments to update or create a Meeting.
     * @example
     * // Update or create a Meeting
     * const meeting = await prisma.meeting.upsert({
     *   create: {
     *     // ... data to create a Meeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meeting we want to update
     *   }
     * })
     */
    upsert<T extends MeetingUpsertArgs>(args: SelectSubset<T, MeetingUpsertArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingCountArgs} args - Arguments to filter Meetings to count.
     * @example
     * // Count the number of Meetings
     * const count = await prisma.meeting.count({
     *   where: {
     *     // ... the filter for the Meetings we want to count
     *   }
     * })
    **/
    count<T extends MeetingCountArgs>(
      args?: Subset<T, MeetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingAggregateArgs>(args: Subset<T, MeetingAggregateArgs>): Prisma.PrismaPromise<GetMeetingAggregateType<T>>

    /**
     * Group by Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingGroupByArgs['orderBy'] }
        : { orderBy?: MeetingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meeting model
   */
  readonly fields: MeetingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campaign<T extends Meeting$campaignArgs<ExtArgs> = {}>(args?: Subset<T, Meeting$campaignArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meeting model
   */
  interface MeetingFieldRefs {
    readonly id: FieldRef<"Meeting", 'String'>
    readonly title: FieldRef<"Meeting", 'String'>
    readonly leadId: FieldRef<"Meeting", 'String'>
    readonly campaignId: FieldRef<"Meeting", 'String'>
    readonly startTime: FieldRef<"Meeting", 'DateTime'>
    readonly endTime: FieldRef<"Meeting", 'DateTime'>
    readonly meetingLink: FieldRef<"Meeting", 'String'>
    readonly status: FieldRef<"Meeting", 'EMeetingStatus'>
    readonly notes: FieldRef<"Meeting", 'String'>
    readonly createdAt: FieldRef<"Meeting", 'DateTime'>
    readonly updatedAt: FieldRef<"Meeting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meeting findUnique
   */
  export type MeetingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findUniqueOrThrow
   */
  export type MeetingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findFirst
   */
  export type MeetingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findFirstOrThrow
   */
  export type MeetingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findMany
   */
  export type MeetingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meetings to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting create
   */
  export type MeetingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to create a Meeting.
     */
    data: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
  }

  /**
   * Meeting createMany
   */
  export type MeetingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meeting createManyAndReturn
   */
  export type MeetingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meeting update
   */
  export type MeetingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to update a Meeting.
     */
    data: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
    /**
     * Choose, which Meeting to update.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting updateMany
   */
  export type MeetingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to update.
     */
    limit?: number
  }

  /**
   * Meeting updateManyAndReturn
   */
  export type MeetingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meeting upsert
   */
  export type MeetingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The filter to search for the Meeting to update in case it exists.
     */
    where: MeetingWhereUniqueInput
    /**
     * In case the Meeting found by the `where` argument doesn't exist, create a new Meeting with this data.
     */
    create: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
    /**
     * In case the Meeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
  }

  /**
   * Meeting delete
   */
  export type MeetingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter which Meeting to delete.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting deleteMany
   */
  export type MeetingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meetings to delete
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to delete.
     */
    limit?: number
  }

  /**
   * Meeting.campaign
   */
  export type Meeting$campaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
  }

  /**
   * Meeting without action
   */
  export type MeetingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
  }


  /**
   * Model OutreachMessage
   */

  export type AggregateOutreachMessage = {
    _count: OutreachMessageCountAggregateOutputType | null
    _avg: OutreachMessageAvgAggregateOutputType | null
    _sum: OutreachMessageSumAggregateOutputType | null
    _min: OutreachMessageMinAggregateOutputType | null
    _max: OutreachMessageMaxAggregateOutputType | null
  }

  export type OutreachMessageAvgAggregateOutputType = {
    followUpCount: number | null
  }

  export type OutreachMessageSumAggregateOutputType = {
    followUpCount: number | null
  }

  export type OutreachMessageMinAggregateOutputType = {
    id: string | null
    leadId: string | null
    campaignId: string | null
    type: $Enums.EOutreachType | null
    senderType: $Enums.EMessageSender | null
    subject: string | null
    body: string | null
    sentAt: Date | null
    replyStatus: $Enums.EReplyStatus | null
    replyContent: string | null
    isFollowUp: boolean | null
    followUpCount: number | null
    gmailThreadId: string | null
    createdAt: Date | null
  }

  export type OutreachMessageMaxAggregateOutputType = {
    id: string | null
    leadId: string | null
    campaignId: string | null
    type: $Enums.EOutreachType | null
    senderType: $Enums.EMessageSender | null
    subject: string | null
    body: string | null
    sentAt: Date | null
    replyStatus: $Enums.EReplyStatus | null
    replyContent: string | null
    isFollowUp: boolean | null
    followUpCount: number | null
    gmailThreadId: string | null
    createdAt: Date | null
  }

  export type OutreachMessageCountAggregateOutputType = {
    id: number
    leadId: number
    campaignId: number
    type: number
    senderType: number
    subject: number
    body: number
    sentAt: number
    replyStatus: number
    replyContent: number
    isFollowUp: number
    followUpCount: number
    gmailThreadId: number
    createdAt: number
    _all: number
  }


  export type OutreachMessageAvgAggregateInputType = {
    followUpCount?: true
  }

  export type OutreachMessageSumAggregateInputType = {
    followUpCount?: true
  }

  export type OutreachMessageMinAggregateInputType = {
    id?: true
    leadId?: true
    campaignId?: true
    type?: true
    senderType?: true
    subject?: true
    body?: true
    sentAt?: true
    replyStatus?: true
    replyContent?: true
    isFollowUp?: true
    followUpCount?: true
    gmailThreadId?: true
    createdAt?: true
  }

  export type OutreachMessageMaxAggregateInputType = {
    id?: true
    leadId?: true
    campaignId?: true
    type?: true
    senderType?: true
    subject?: true
    body?: true
    sentAt?: true
    replyStatus?: true
    replyContent?: true
    isFollowUp?: true
    followUpCount?: true
    gmailThreadId?: true
    createdAt?: true
  }

  export type OutreachMessageCountAggregateInputType = {
    id?: true
    leadId?: true
    campaignId?: true
    type?: true
    senderType?: true
    subject?: true
    body?: true
    sentAt?: true
    replyStatus?: true
    replyContent?: true
    isFollowUp?: true
    followUpCount?: true
    gmailThreadId?: true
    createdAt?: true
    _all?: true
  }

  export type OutreachMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutreachMessage to aggregate.
     */
    where?: OutreachMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutreachMessages to fetch.
     */
    orderBy?: OutreachMessageOrderByWithRelationInput | OutreachMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutreachMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutreachMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutreachMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutreachMessages
    **/
    _count?: true | OutreachMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutreachMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutreachMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutreachMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutreachMessageMaxAggregateInputType
  }

  export type GetOutreachMessageAggregateType<T extends OutreachMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateOutreachMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutreachMessage[P]>
      : GetScalarType<T[P], AggregateOutreachMessage[P]>
  }




  export type OutreachMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutreachMessageWhereInput
    orderBy?: OutreachMessageOrderByWithAggregationInput | OutreachMessageOrderByWithAggregationInput[]
    by: OutreachMessageScalarFieldEnum[] | OutreachMessageScalarFieldEnum
    having?: OutreachMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutreachMessageCountAggregateInputType | true
    _avg?: OutreachMessageAvgAggregateInputType
    _sum?: OutreachMessageSumAggregateInputType
    _min?: OutreachMessageMinAggregateInputType
    _max?: OutreachMessageMaxAggregateInputType
  }

  export type OutreachMessageGroupByOutputType = {
    id: string
    leadId: string
    campaignId: string
    type: $Enums.EOutreachType
    senderType: $Enums.EMessageSender
    subject: string | null
    body: string
    sentAt: Date | null
    replyStatus: $Enums.EReplyStatus
    replyContent: string | null
    isFollowUp: boolean
    followUpCount: number
    gmailThreadId: string | null
    createdAt: Date
    _count: OutreachMessageCountAggregateOutputType | null
    _avg: OutreachMessageAvgAggregateOutputType | null
    _sum: OutreachMessageSumAggregateOutputType | null
    _min: OutreachMessageMinAggregateOutputType | null
    _max: OutreachMessageMaxAggregateOutputType | null
  }

  type GetOutreachMessageGroupByPayload<T extends OutreachMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutreachMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutreachMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutreachMessageGroupByOutputType[P]>
            : GetScalarType<T[P], OutreachMessageGroupByOutputType[P]>
        }
      >
    >


  export type OutreachMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    campaignId?: boolean
    type?: boolean
    senderType?: boolean
    subject?: boolean
    body?: boolean
    sentAt?: boolean
    replyStatus?: boolean
    replyContent?: boolean
    isFollowUp?: boolean
    followUpCount?: boolean
    gmailThreadId?: boolean
    createdAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outreachMessage"]>

  export type OutreachMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    campaignId?: boolean
    type?: boolean
    senderType?: boolean
    subject?: boolean
    body?: boolean
    sentAt?: boolean
    replyStatus?: boolean
    replyContent?: boolean
    isFollowUp?: boolean
    followUpCount?: boolean
    gmailThreadId?: boolean
    createdAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outreachMessage"]>

  export type OutreachMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leadId?: boolean
    campaignId?: boolean
    type?: boolean
    senderType?: boolean
    subject?: boolean
    body?: boolean
    sentAt?: boolean
    replyStatus?: boolean
    replyContent?: boolean
    isFollowUp?: boolean
    followUpCount?: boolean
    gmailThreadId?: boolean
    createdAt?: boolean
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outreachMessage"]>

  export type OutreachMessageSelectScalar = {
    id?: boolean
    leadId?: boolean
    campaignId?: boolean
    type?: boolean
    senderType?: boolean
    subject?: boolean
    body?: boolean
    sentAt?: boolean
    replyStatus?: boolean
    replyContent?: boolean
    isFollowUp?: boolean
    followUpCount?: boolean
    gmailThreadId?: boolean
    createdAt?: boolean
  }

  export type OutreachMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leadId" | "campaignId" | "type" | "senderType" | "subject" | "body" | "sentAt" | "replyStatus" | "replyContent" | "isFollowUp" | "followUpCount" | "gmailThreadId" | "createdAt", ExtArgs["result"]["outreachMessage"]>
  export type OutreachMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type OutreachMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type OutreachMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lead?: boolean | LeadDefaultArgs<ExtArgs>
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }

  export type $OutreachMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutreachMessage"
    objects: {
      lead: Prisma.$LeadPayload<ExtArgs>
      campaign: Prisma.$CampaignPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leadId: string
      campaignId: string
      type: $Enums.EOutreachType
      senderType: $Enums.EMessageSender
      subject: string | null
      body: string
      sentAt: Date | null
      replyStatus: $Enums.EReplyStatus
      replyContent: string | null
      isFollowUp: boolean
      followUpCount: number
      gmailThreadId: string | null
      createdAt: Date
    }, ExtArgs["result"]["outreachMessage"]>
    composites: {}
  }

  type OutreachMessageGetPayload<S extends boolean | null | undefined | OutreachMessageDefaultArgs> = $Result.GetResult<Prisma.$OutreachMessagePayload, S>

  type OutreachMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutreachMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutreachMessageCountAggregateInputType | true
    }

  export interface OutreachMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutreachMessage'], meta: { name: 'OutreachMessage' } }
    /**
     * Find zero or one OutreachMessage that matches the filter.
     * @param {OutreachMessageFindUniqueArgs} args - Arguments to find a OutreachMessage
     * @example
     * // Get one OutreachMessage
     * const outreachMessage = await prisma.outreachMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutreachMessageFindUniqueArgs>(args: SelectSubset<T, OutreachMessageFindUniqueArgs<ExtArgs>>): Prisma__OutreachMessageClient<$Result.GetResult<Prisma.$OutreachMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OutreachMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutreachMessageFindUniqueOrThrowArgs} args - Arguments to find a OutreachMessage
     * @example
     * // Get one OutreachMessage
     * const outreachMessage = await prisma.outreachMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutreachMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, OutreachMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutreachMessageClient<$Result.GetResult<Prisma.$OutreachMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutreachMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutreachMessageFindFirstArgs} args - Arguments to find a OutreachMessage
     * @example
     * // Get one OutreachMessage
     * const outreachMessage = await prisma.outreachMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutreachMessageFindFirstArgs>(args?: SelectSubset<T, OutreachMessageFindFirstArgs<ExtArgs>>): Prisma__OutreachMessageClient<$Result.GetResult<Prisma.$OutreachMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutreachMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutreachMessageFindFirstOrThrowArgs} args - Arguments to find a OutreachMessage
     * @example
     * // Get one OutreachMessage
     * const outreachMessage = await prisma.outreachMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutreachMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, OutreachMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutreachMessageClient<$Result.GetResult<Prisma.$OutreachMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OutreachMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutreachMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutreachMessages
     * const outreachMessages = await prisma.outreachMessage.findMany()
     * 
     * // Get first 10 OutreachMessages
     * const outreachMessages = await prisma.outreachMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outreachMessageWithIdOnly = await prisma.outreachMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutreachMessageFindManyArgs>(args?: SelectSubset<T, OutreachMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutreachMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OutreachMessage.
     * @param {OutreachMessageCreateArgs} args - Arguments to create a OutreachMessage.
     * @example
     * // Create one OutreachMessage
     * const OutreachMessage = await prisma.outreachMessage.create({
     *   data: {
     *     // ... data to create a OutreachMessage
     *   }
     * })
     * 
     */
    create<T extends OutreachMessageCreateArgs>(args: SelectSubset<T, OutreachMessageCreateArgs<ExtArgs>>): Prisma__OutreachMessageClient<$Result.GetResult<Prisma.$OutreachMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OutreachMessages.
     * @param {OutreachMessageCreateManyArgs} args - Arguments to create many OutreachMessages.
     * @example
     * // Create many OutreachMessages
     * const outreachMessage = await prisma.outreachMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutreachMessageCreateManyArgs>(args?: SelectSubset<T, OutreachMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OutreachMessages and returns the data saved in the database.
     * @param {OutreachMessageCreateManyAndReturnArgs} args - Arguments to create many OutreachMessages.
     * @example
     * // Create many OutreachMessages
     * const outreachMessage = await prisma.outreachMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OutreachMessages and only return the `id`
     * const outreachMessageWithIdOnly = await prisma.outreachMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutreachMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, OutreachMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutreachMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OutreachMessage.
     * @param {OutreachMessageDeleteArgs} args - Arguments to delete one OutreachMessage.
     * @example
     * // Delete one OutreachMessage
     * const OutreachMessage = await prisma.outreachMessage.delete({
     *   where: {
     *     // ... filter to delete one OutreachMessage
     *   }
     * })
     * 
     */
    delete<T extends OutreachMessageDeleteArgs>(args: SelectSubset<T, OutreachMessageDeleteArgs<ExtArgs>>): Prisma__OutreachMessageClient<$Result.GetResult<Prisma.$OutreachMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OutreachMessage.
     * @param {OutreachMessageUpdateArgs} args - Arguments to update one OutreachMessage.
     * @example
     * // Update one OutreachMessage
     * const outreachMessage = await prisma.outreachMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutreachMessageUpdateArgs>(args: SelectSubset<T, OutreachMessageUpdateArgs<ExtArgs>>): Prisma__OutreachMessageClient<$Result.GetResult<Prisma.$OutreachMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OutreachMessages.
     * @param {OutreachMessageDeleteManyArgs} args - Arguments to filter OutreachMessages to delete.
     * @example
     * // Delete a few OutreachMessages
     * const { count } = await prisma.outreachMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutreachMessageDeleteManyArgs>(args?: SelectSubset<T, OutreachMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutreachMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutreachMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutreachMessages
     * const outreachMessage = await prisma.outreachMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutreachMessageUpdateManyArgs>(args: SelectSubset<T, OutreachMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutreachMessages and returns the data updated in the database.
     * @param {OutreachMessageUpdateManyAndReturnArgs} args - Arguments to update many OutreachMessages.
     * @example
     * // Update many OutreachMessages
     * const outreachMessage = await prisma.outreachMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OutreachMessages and only return the `id`
     * const outreachMessageWithIdOnly = await prisma.outreachMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OutreachMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, OutreachMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutreachMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OutreachMessage.
     * @param {OutreachMessageUpsertArgs} args - Arguments to update or create a OutreachMessage.
     * @example
     * // Update or create a OutreachMessage
     * const outreachMessage = await prisma.outreachMessage.upsert({
     *   create: {
     *     // ... data to create a OutreachMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutreachMessage we want to update
     *   }
     * })
     */
    upsert<T extends OutreachMessageUpsertArgs>(args: SelectSubset<T, OutreachMessageUpsertArgs<ExtArgs>>): Prisma__OutreachMessageClient<$Result.GetResult<Prisma.$OutreachMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OutreachMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutreachMessageCountArgs} args - Arguments to filter OutreachMessages to count.
     * @example
     * // Count the number of OutreachMessages
     * const count = await prisma.outreachMessage.count({
     *   where: {
     *     // ... the filter for the OutreachMessages we want to count
     *   }
     * })
    **/
    count<T extends OutreachMessageCountArgs>(
      args?: Subset<T, OutreachMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutreachMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutreachMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutreachMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OutreachMessageAggregateArgs>(args: Subset<T, OutreachMessageAggregateArgs>): Prisma.PrismaPromise<GetOutreachMessageAggregateType<T>>

    /**
     * Group by OutreachMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutreachMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OutreachMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutreachMessageGroupByArgs['orderBy'] }
        : { orderBy?: OutreachMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OutreachMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutreachMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutreachMessage model
   */
  readonly fields: OutreachMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutreachMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutreachMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OutreachMessage model
   */
  interface OutreachMessageFieldRefs {
    readonly id: FieldRef<"OutreachMessage", 'String'>
    readonly leadId: FieldRef<"OutreachMessage", 'String'>
    readonly campaignId: FieldRef<"OutreachMessage", 'String'>
    readonly type: FieldRef<"OutreachMessage", 'EOutreachType'>
    readonly senderType: FieldRef<"OutreachMessage", 'EMessageSender'>
    readonly subject: FieldRef<"OutreachMessage", 'String'>
    readonly body: FieldRef<"OutreachMessage", 'String'>
    readonly sentAt: FieldRef<"OutreachMessage", 'DateTime'>
    readonly replyStatus: FieldRef<"OutreachMessage", 'EReplyStatus'>
    readonly replyContent: FieldRef<"OutreachMessage", 'String'>
    readonly isFollowUp: FieldRef<"OutreachMessage", 'Boolean'>
    readonly followUpCount: FieldRef<"OutreachMessage", 'Int'>
    readonly gmailThreadId: FieldRef<"OutreachMessage", 'String'>
    readonly createdAt: FieldRef<"OutreachMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OutreachMessage findUnique
   */
  export type OutreachMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutreachMessage
     */
    select?: OutreachMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutreachMessage
     */
    omit?: OutreachMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutreachMessageInclude<ExtArgs> | null
    /**
     * Filter, which OutreachMessage to fetch.
     */
    where: OutreachMessageWhereUniqueInput
  }

  /**
   * OutreachMessage findUniqueOrThrow
   */
  export type OutreachMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutreachMessage
     */
    select?: OutreachMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutreachMessage
     */
    omit?: OutreachMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutreachMessageInclude<ExtArgs> | null
    /**
     * Filter, which OutreachMessage to fetch.
     */
    where: OutreachMessageWhereUniqueInput
  }

  /**
   * OutreachMessage findFirst
   */
  export type OutreachMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutreachMessage
     */
    select?: OutreachMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutreachMessage
     */
    omit?: OutreachMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutreachMessageInclude<ExtArgs> | null
    /**
     * Filter, which OutreachMessage to fetch.
     */
    where?: OutreachMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutreachMessages to fetch.
     */
    orderBy?: OutreachMessageOrderByWithRelationInput | OutreachMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutreachMessages.
     */
    cursor?: OutreachMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutreachMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutreachMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutreachMessages.
     */
    distinct?: OutreachMessageScalarFieldEnum | OutreachMessageScalarFieldEnum[]
  }

  /**
   * OutreachMessage findFirstOrThrow
   */
  export type OutreachMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutreachMessage
     */
    select?: OutreachMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutreachMessage
     */
    omit?: OutreachMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutreachMessageInclude<ExtArgs> | null
    /**
     * Filter, which OutreachMessage to fetch.
     */
    where?: OutreachMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutreachMessages to fetch.
     */
    orderBy?: OutreachMessageOrderByWithRelationInput | OutreachMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutreachMessages.
     */
    cursor?: OutreachMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutreachMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutreachMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutreachMessages.
     */
    distinct?: OutreachMessageScalarFieldEnum | OutreachMessageScalarFieldEnum[]
  }

  /**
   * OutreachMessage findMany
   */
  export type OutreachMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutreachMessage
     */
    select?: OutreachMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutreachMessage
     */
    omit?: OutreachMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutreachMessageInclude<ExtArgs> | null
    /**
     * Filter, which OutreachMessages to fetch.
     */
    where?: OutreachMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutreachMessages to fetch.
     */
    orderBy?: OutreachMessageOrderByWithRelationInput | OutreachMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutreachMessages.
     */
    cursor?: OutreachMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutreachMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutreachMessages.
     */
    skip?: number
    distinct?: OutreachMessageScalarFieldEnum | OutreachMessageScalarFieldEnum[]
  }

  /**
   * OutreachMessage create
   */
  export type OutreachMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutreachMessage
     */
    select?: OutreachMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutreachMessage
     */
    omit?: OutreachMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutreachMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a OutreachMessage.
     */
    data: XOR<OutreachMessageCreateInput, OutreachMessageUncheckedCreateInput>
  }

  /**
   * OutreachMessage createMany
   */
  export type OutreachMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutreachMessages.
     */
    data: OutreachMessageCreateManyInput | OutreachMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutreachMessage createManyAndReturn
   */
  export type OutreachMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutreachMessage
     */
    select?: OutreachMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutreachMessage
     */
    omit?: OutreachMessageOmit<ExtArgs> | null
    /**
     * The data used to create many OutreachMessages.
     */
    data: OutreachMessageCreateManyInput | OutreachMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutreachMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutreachMessage update
   */
  export type OutreachMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutreachMessage
     */
    select?: OutreachMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutreachMessage
     */
    omit?: OutreachMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutreachMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a OutreachMessage.
     */
    data: XOR<OutreachMessageUpdateInput, OutreachMessageUncheckedUpdateInput>
    /**
     * Choose, which OutreachMessage to update.
     */
    where: OutreachMessageWhereUniqueInput
  }

  /**
   * OutreachMessage updateMany
   */
  export type OutreachMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutreachMessages.
     */
    data: XOR<OutreachMessageUpdateManyMutationInput, OutreachMessageUncheckedUpdateManyInput>
    /**
     * Filter which OutreachMessages to update
     */
    where?: OutreachMessageWhereInput
    /**
     * Limit how many OutreachMessages to update.
     */
    limit?: number
  }

  /**
   * OutreachMessage updateManyAndReturn
   */
  export type OutreachMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutreachMessage
     */
    select?: OutreachMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutreachMessage
     */
    omit?: OutreachMessageOmit<ExtArgs> | null
    /**
     * The data used to update OutreachMessages.
     */
    data: XOR<OutreachMessageUpdateManyMutationInput, OutreachMessageUncheckedUpdateManyInput>
    /**
     * Filter which OutreachMessages to update
     */
    where?: OutreachMessageWhereInput
    /**
     * Limit how many OutreachMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutreachMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OutreachMessage upsert
   */
  export type OutreachMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutreachMessage
     */
    select?: OutreachMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutreachMessage
     */
    omit?: OutreachMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutreachMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the OutreachMessage to update in case it exists.
     */
    where: OutreachMessageWhereUniqueInput
    /**
     * In case the OutreachMessage found by the `where` argument doesn't exist, create a new OutreachMessage with this data.
     */
    create: XOR<OutreachMessageCreateInput, OutreachMessageUncheckedCreateInput>
    /**
     * In case the OutreachMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutreachMessageUpdateInput, OutreachMessageUncheckedUpdateInput>
  }

  /**
   * OutreachMessage delete
   */
  export type OutreachMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutreachMessage
     */
    select?: OutreachMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutreachMessage
     */
    omit?: OutreachMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutreachMessageInclude<ExtArgs> | null
    /**
     * Filter which OutreachMessage to delete.
     */
    where: OutreachMessageWhereUniqueInput
  }

  /**
   * OutreachMessage deleteMany
   */
  export type OutreachMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutreachMessages to delete
     */
    where?: OutreachMessageWhereInput
    /**
     * Limit how many OutreachMessages to delete.
     */
    limit?: number
  }

  /**
   * OutreachMessage without action
   */
  export type OutreachMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutreachMessage
     */
    select?: OutreachMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutreachMessage
     */
    omit?: OutreachMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutreachMessageInclude<ExtArgs> | null
  }


  /**
   * Model ScrapingJob
   */

  export type AggregateScrapingJob = {
    _count: ScrapingJobCountAggregateOutputType | null
    _avg: ScrapingJobAvgAggregateOutputType | null
    _sum: ScrapingJobSumAggregateOutputType | null
    _min: ScrapingJobMinAggregateOutputType | null
    _max: ScrapingJobMaxAggregateOutputType | null
  }

  export type ScrapingJobAvgAggregateOutputType = {
    leadsFound: number | null
    leadsExtracted: number | null
  }

  export type ScrapingJobSumAggregateOutputType = {
    leadsFound: number | null
    leadsExtracted: number | null
  }

  export type ScrapingJobMinAggregateOutputType = {
    id: string | null
    campaignId: string | null
    platform: $Enums.EPlatform | null
    status: $Enums.EScrapingJobStatus | null
    targetQuery: string | null
    leadsFound: number | null
    leadsExtracted: number | null
    startedAt: Date | null
    completedAt: Date | null
    errorLog: string | null
    createdAt: Date | null
  }

  export type ScrapingJobMaxAggregateOutputType = {
    id: string | null
    campaignId: string | null
    platform: $Enums.EPlatform | null
    status: $Enums.EScrapingJobStatus | null
    targetQuery: string | null
    leadsFound: number | null
    leadsExtracted: number | null
    startedAt: Date | null
    completedAt: Date | null
    errorLog: string | null
    createdAt: Date | null
  }

  export type ScrapingJobCountAggregateOutputType = {
    id: number
    campaignId: number
    platform: number
    status: number
    targetQuery: number
    leadsFound: number
    leadsExtracted: number
    startedAt: number
    completedAt: number
    errorLog: number
    createdAt: number
    _all: number
  }


  export type ScrapingJobAvgAggregateInputType = {
    leadsFound?: true
    leadsExtracted?: true
  }

  export type ScrapingJobSumAggregateInputType = {
    leadsFound?: true
    leadsExtracted?: true
  }

  export type ScrapingJobMinAggregateInputType = {
    id?: true
    campaignId?: true
    platform?: true
    status?: true
    targetQuery?: true
    leadsFound?: true
    leadsExtracted?: true
    startedAt?: true
    completedAt?: true
    errorLog?: true
    createdAt?: true
  }

  export type ScrapingJobMaxAggregateInputType = {
    id?: true
    campaignId?: true
    platform?: true
    status?: true
    targetQuery?: true
    leadsFound?: true
    leadsExtracted?: true
    startedAt?: true
    completedAt?: true
    errorLog?: true
    createdAt?: true
  }

  export type ScrapingJobCountAggregateInputType = {
    id?: true
    campaignId?: true
    platform?: true
    status?: true
    targetQuery?: true
    leadsFound?: true
    leadsExtracted?: true
    startedAt?: true
    completedAt?: true
    errorLog?: true
    createdAt?: true
    _all?: true
  }

  export type ScrapingJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrapingJob to aggregate.
     */
    where?: ScrapingJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapingJobs to fetch.
     */
    orderBy?: ScrapingJobOrderByWithRelationInput | ScrapingJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScrapingJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapingJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapingJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScrapingJobs
    **/
    _count?: true | ScrapingJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScrapingJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScrapingJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScrapingJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScrapingJobMaxAggregateInputType
  }

  export type GetScrapingJobAggregateType<T extends ScrapingJobAggregateArgs> = {
        [P in keyof T & keyof AggregateScrapingJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScrapingJob[P]>
      : GetScalarType<T[P], AggregateScrapingJob[P]>
  }




  export type ScrapingJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScrapingJobWhereInput
    orderBy?: ScrapingJobOrderByWithAggregationInput | ScrapingJobOrderByWithAggregationInput[]
    by: ScrapingJobScalarFieldEnum[] | ScrapingJobScalarFieldEnum
    having?: ScrapingJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScrapingJobCountAggregateInputType | true
    _avg?: ScrapingJobAvgAggregateInputType
    _sum?: ScrapingJobSumAggregateInputType
    _min?: ScrapingJobMinAggregateInputType
    _max?: ScrapingJobMaxAggregateInputType
  }

  export type ScrapingJobGroupByOutputType = {
    id: string
    campaignId: string
    platform: $Enums.EPlatform
    status: $Enums.EScrapingJobStatus
    targetQuery: string | null
    leadsFound: number
    leadsExtracted: number
    startedAt: Date | null
    completedAt: Date | null
    errorLog: string | null
    createdAt: Date
    _count: ScrapingJobCountAggregateOutputType | null
    _avg: ScrapingJobAvgAggregateOutputType | null
    _sum: ScrapingJobSumAggregateOutputType | null
    _min: ScrapingJobMinAggregateOutputType | null
    _max: ScrapingJobMaxAggregateOutputType | null
  }

  type GetScrapingJobGroupByPayload<T extends ScrapingJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScrapingJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScrapingJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScrapingJobGroupByOutputType[P]>
            : GetScalarType<T[P], ScrapingJobGroupByOutputType[P]>
        }
      >
    >


  export type ScrapingJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    platform?: boolean
    status?: boolean
    targetQuery?: boolean
    leadsFound?: boolean
    leadsExtracted?: boolean
    startedAt?: boolean
    completedAt?: boolean
    errorLog?: boolean
    createdAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    leads?: boolean | ScrapingJob$leadsArgs<ExtArgs>
    _count?: boolean | ScrapingJobCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scrapingJob"]>

  export type ScrapingJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    platform?: boolean
    status?: boolean
    targetQuery?: boolean
    leadsFound?: boolean
    leadsExtracted?: boolean
    startedAt?: boolean
    completedAt?: boolean
    errorLog?: boolean
    createdAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scrapingJob"]>

  export type ScrapingJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    platform?: boolean
    status?: boolean
    targetQuery?: boolean
    leadsFound?: boolean
    leadsExtracted?: boolean
    startedAt?: boolean
    completedAt?: boolean
    errorLog?: boolean
    createdAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scrapingJob"]>

  export type ScrapingJobSelectScalar = {
    id?: boolean
    campaignId?: boolean
    platform?: boolean
    status?: boolean
    targetQuery?: boolean
    leadsFound?: boolean
    leadsExtracted?: boolean
    startedAt?: boolean
    completedAt?: boolean
    errorLog?: boolean
    createdAt?: boolean
  }

  export type ScrapingJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "platform" | "status" | "targetQuery" | "leadsFound" | "leadsExtracted" | "startedAt" | "completedAt" | "errorLog" | "createdAt", ExtArgs["result"]["scrapingJob"]>
  export type ScrapingJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    leads?: boolean | ScrapingJob$leadsArgs<ExtArgs>
    _count?: boolean | ScrapingJobCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScrapingJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }
  export type ScrapingJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
  }

  export type $ScrapingJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScrapingJob"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      leads: Prisma.$LeadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      campaignId: string
      platform: $Enums.EPlatform
      status: $Enums.EScrapingJobStatus
      targetQuery: string | null
      leadsFound: number
      leadsExtracted: number
      startedAt: Date | null
      completedAt: Date | null
      errorLog: string | null
      createdAt: Date
    }, ExtArgs["result"]["scrapingJob"]>
    composites: {}
  }

  type ScrapingJobGetPayload<S extends boolean | null | undefined | ScrapingJobDefaultArgs> = $Result.GetResult<Prisma.$ScrapingJobPayload, S>

  type ScrapingJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScrapingJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScrapingJobCountAggregateInputType | true
    }

  export interface ScrapingJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScrapingJob'], meta: { name: 'ScrapingJob' } }
    /**
     * Find zero or one ScrapingJob that matches the filter.
     * @param {ScrapingJobFindUniqueArgs} args - Arguments to find a ScrapingJob
     * @example
     * // Get one ScrapingJob
     * const scrapingJob = await prisma.scrapingJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScrapingJobFindUniqueArgs>(args: SelectSubset<T, ScrapingJobFindUniqueArgs<ExtArgs>>): Prisma__ScrapingJobClient<$Result.GetResult<Prisma.$ScrapingJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScrapingJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScrapingJobFindUniqueOrThrowArgs} args - Arguments to find a ScrapingJob
     * @example
     * // Get one ScrapingJob
     * const scrapingJob = await prisma.scrapingJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScrapingJobFindUniqueOrThrowArgs>(args: SelectSubset<T, ScrapingJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScrapingJobClient<$Result.GetResult<Prisma.$ScrapingJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScrapingJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapingJobFindFirstArgs} args - Arguments to find a ScrapingJob
     * @example
     * // Get one ScrapingJob
     * const scrapingJob = await prisma.scrapingJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScrapingJobFindFirstArgs>(args?: SelectSubset<T, ScrapingJobFindFirstArgs<ExtArgs>>): Prisma__ScrapingJobClient<$Result.GetResult<Prisma.$ScrapingJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScrapingJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapingJobFindFirstOrThrowArgs} args - Arguments to find a ScrapingJob
     * @example
     * // Get one ScrapingJob
     * const scrapingJob = await prisma.scrapingJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScrapingJobFindFirstOrThrowArgs>(args?: SelectSubset<T, ScrapingJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScrapingJobClient<$Result.GetResult<Prisma.$ScrapingJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScrapingJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapingJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScrapingJobs
     * const scrapingJobs = await prisma.scrapingJob.findMany()
     * 
     * // Get first 10 ScrapingJobs
     * const scrapingJobs = await prisma.scrapingJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scrapingJobWithIdOnly = await prisma.scrapingJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScrapingJobFindManyArgs>(args?: SelectSubset<T, ScrapingJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapingJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScrapingJob.
     * @param {ScrapingJobCreateArgs} args - Arguments to create a ScrapingJob.
     * @example
     * // Create one ScrapingJob
     * const ScrapingJob = await prisma.scrapingJob.create({
     *   data: {
     *     // ... data to create a ScrapingJob
     *   }
     * })
     * 
     */
    create<T extends ScrapingJobCreateArgs>(args: SelectSubset<T, ScrapingJobCreateArgs<ExtArgs>>): Prisma__ScrapingJobClient<$Result.GetResult<Prisma.$ScrapingJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScrapingJobs.
     * @param {ScrapingJobCreateManyArgs} args - Arguments to create many ScrapingJobs.
     * @example
     * // Create many ScrapingJobs
     * const scrapingJob = await prisma.scrapingJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScrapingJobCreateManyArgs>(args?: SelectSubset<T, ScrapingJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScrapingJobs and returns the data saved in the database.
     * @param {ScrapingJobCreateManyAndReturnArgs} args - Arguments to create many ScrapingJobs.
     * @example
     * // Create many ScrapingJobs
     * const scrapingJob = await prisma.scrapingJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScrapingJobs and only return the `id`
     * const scrapingJobWithIdOnly = await prisma.scrapingJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScrapingJobCreateManyAndReturnArgs>(args?: SelectSubset<T, ScrapingJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapingJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScrapingJob.
     * @param {ScrapingJobDeleteArgs} args - Arguments to delete one ScrapingJob.
     * @example
     * // Delete one ScrapingJob
     * const ScrapingJob = await prisma.scrapingJob.delete({
     *   where: {
     *     // ... filter to delete one ScrapingJob
     *   }
     * })
     * 
     */
    delete<T extends ScrapingJobDeleteArgs>(args: SelectSubset<T, ScrapingJobDeleteArgs<ExtArgs>>): Prisma__ScrapingJobClient<$Result.GetResult<Prisma.$ScrapingJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScrapingJob.
     * @param {ScrapingJobUpdateArgs} args - Arguments to update one ScrapingJob.
     * @example
     * // Update one ScrapingJob
     * const scrapingJob = await prisma.scrapingJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScrapingJobUpdateArgs>(args: SelectSubset<T, ScrapingJobUpdateArgs<ExtArgs>>): Prisma__ScrapingJobClient<$Result.GetResult<Prisma.$ScrapingJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScrapingJobs.
     * @param {ScrapingJobDeleteManyArgs} args - Arguments to filter ScrapingJobs to delete.
     * @example
     * // Delete a few ScrapingJobs
     * const { count } = await prisma.scrapingJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScrapingJobDeleteManyArgs>(args?: SelectSubset<T, ScrapingJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScrapingJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapingJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScrapingJobs
     * const scrapingJob = await prisma.scrapingJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScrapingJobUpdateManyArgs>(args: SelectSubset<T, ScrapingJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScrapingJobs and returns the data updated in the database.
     * @param {ScrapingJobUpdateManyAndReturnArgs} args - Arguments to update many ScrapingJobs.
     * @example
     * // Update many ScrapingJobs
     * const scrapingJob = await prisma.scrapingJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScrapingJobs and only return the `id`
     * const scrapingJobWithIdOnly = await prisma.scrapingJob.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScrapingJobUpdateManyAndReturnArgs>(args: SelectSubset<T, ScrapingJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapingJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScrapingJob.
     * @param {ScrapingJobUpsertArgs} args - Arguments to update or create a ScrapingJob.
     * @example
     * // Update or create a ScrapingJob
     * const scrapingJob = await prisma.scrapingJob.upsert({
     *   create: {
     *     // ... data to create a ScrapingJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScrapingJob we want to update
     *   }
     * })
     */
    upsert<T extends ScrapingJobUpsertArgs>(args: SelectSubset<T, ScrapingJobUpsertArgs<ExtArgs>>): Prisma__ScrapingJobClient<$Result.GetResult<Prisma.$ScrapingJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScrapingJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapingJobCountArgs} args - Arguments to filter ScrapingJobs to count.
     * @example
     * // Count the number of ScrapingJobs
     * const count = await prisma.scrapingJob.count({
     *   where: {
     *     // ... the filter for the ScrapingJobs we want to count
     *   }
     * })
    **/
    count<T extends ScrapingJobCountArgs>(
      args?: Subset<T, ScrapingJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScrapingJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScrapingJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapingJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScrapingJobAggregateArgs>(args: Subset<T, ScrapingJobAggregateArgs>): Prisma.PrismaPromise<GetScrapingJobAggregateType<T>>

    /**
     * Group by ScrapingJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapingJobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScrapingJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScrapingJobGroupByArgs['orderBy'] }
        : { orderBy?: ScrapingJobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScrapingJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScrapingJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScrapingJob model
   */
  readonly fields: ScrapingJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScrapingJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScrapingJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leads<T extends ScrapingJob$leadsArgs<ExtArgs> = {}>(args?: Subset<T, ScrapingJob$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScrapingJob model
   */
  interface ScrapingJobFieldRefs {
    readonly id: FieldRef<"ScrapingJob", 'String'>
    readonly campaignId: FieldRef<"ScrapingJob", 'String'>
    readonly platform: FieldRef<"ScrapingJob", 'EPlatform'>
    readonly status: FieldRef<"ScrapingJob", 'EScrapingJobStatus'>
    readonly targetQuery: FieldRef<"ScrapingJob", 'String'>
    readonly leadsFound: FieldRef<"ScrapingJob", 'Int'>
    readonly leadsExtracted: FieldRef<"ScrapingJob", 'Int'>
    readonly startedAt: FieldRef<"ScrapingJob", 'DateTime'>
    readonly completedAt: FieldRef<"ScrapingJob", 'DateTime'>
    readonly errorLog: FieldRef<"ScrapingJob", 'String'>
    readonly createdAt: FieldRef<"ScrapingJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScrapingJob findUnique
   */
  export type ScrapingJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapingJob
     */
    omit?: ScrapingJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapingJobInclude<ExtArgs> | null
    /**
     * Filter, which ScrapingJob to fetch.
     */
    where: ScrapingJobWhereUniqueInput
  }

  /**
   * ScrapingJob findUniqueOrThrow
   */
  export type ScrapingJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapingJob
     */
    omit?: ScrapingJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapingJobInclude<ExtArgs> | null
    /**
     * Filter, which ScrapingJob to fetch.
     */
    where: ScrapingJobWhereUniqueInput
  }

  /**
   * ScrapingJob findFirst
   */
  export type ScrapingJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapingJob
     */
    omit?: ScrapingJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapingJobInclude<ExtArgs> | null
    /**
     * Filter, which ScrapingJob to fetch.
     */
    where?: ScrapingJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapingJobs to fetch.
     */
    orderBy?: ScrapingJobOrderByWithRelationInput | ScrapingJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrapingJobs.
     */
    cursor?: ScrapingJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapingJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapingJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapingJobs.
     */
    distinct?: ScrapingJobScalarFieldEnum | ScrapingJobScalarFieldEnum[]
  }

  /**
   * ScrapingJob findFirstOrThrow
   */
  export type ScrapingJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapingJob
     */
    omit?: ScrapingJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapingJobInclude<ExtArgs> | null
    /**
     * Filter, which ScrapingJob to fetch.
     */
    where?: ScrapingJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapingJobs to fetch.
     */
    orderBy?: ScrapingJobOrderByWithRelationInput | ScrapingJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrapingJobs.
     */
    cursor?: ScrapingJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapingJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapingJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapingJobs.
     */
    distinct?: ScrapingJobScalarFieldEnum | ScrapingJobScalarFieldEnum[]
  }

  /**
   * ScrapingJob findMany
   */
  export type ScrapingJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapingJob
     */
    omit?: ScrapingJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapingJobInclude<ExtArgs> | null
    /**
     * Filter, which ScrapingJobs to fetch.
     */
    where?: ScrapingJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapingJobs to fetch.
     */
    orderBy?: ScrapingJobOrderByWithRelationInput | ScrapingJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScrapingJobs.
     */
    cursor?: ScrapingJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapingJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapingJobs.
     */
    skip?: number
    distinct?: ScrapingJobScalarFieldEnum | ScrapingJobScalarFieldEnum[]
  }

  /**
   * ScrapingJob create
   */
  export type ScrapingJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapingJob
     */
    omit?: ScrapingJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapingJobInclude<ExtArgs> | null
    /**
     * The data needed to create a ScrapingJob.
     */
    data: XOR<ScrapingJobCreateInput, ScrapingJobUncheckedCreateInput>
  }

  /**
   * ScrapingJob createMany
   */
  export type ScrapingJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScrapingJobs.
     */
    data: ScrapingJobCreateManyInput | ScrapingJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScrapingJob createManyAndReturn
   */
  export type ScrapingJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapingJob
     */
    omit?: ScrapingJobOmit<ExtArgs> | null
    /**
     * The data used to create many ScrapingJobs.
     */
    data: ScrapingJobCreateManyInput | ScrapingJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapingJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScrapingJob update
   */
  export type ScrapingJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapingJob
     */
    omit?: ScrapingJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapingJobInclude<ExtArgs> | null
    /**
     * The data needed to update a ScrapingJob.
     */
    data: XOR<ScrapingJobUpdateInput, ScrapingJobUncheckedUpdateInput>
    /**
     * Choose, which ScrapingJob to update.
     */
    where: ScrapingJobWhereUniqueInput
  }

  /**
   * ScrapingJob updateMany
   */
  export type ScrapingJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScrapingJobs.
     */
    data: XOR<ScrapingJobUpdateManyMutationInput, ScrapingJobUncheckedUpdateManyInput>
    /**
     * Filter which ScrapingJobs to update
     */
    where?: ScrapingJobWhereInput
    /**
     * Limit how many ScrapingJobs to update.
     */
    limit?: number
  }

  /**
   * ScrapingJob updateManyAndReturn
   */
  export type ScrapingJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapingJob
     */
    omit?: ScrapingJobOmit<ExtArgs> | null
    /**
     * The data used to update ScrapingJobs.
     */
    data: XOR<ScrapingJobUpdateManyMutationInput, ScrapingJobUncheckedUpdateManyInput>
    /**
     * Filter which ScrapingJobs to update
     */
    where?: ScrapingJobWhereInput
    /**
     * Limit how many ScrapingJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapingJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScrapingJob upsert
   */
  export type ScrapingJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapingJob
     */
    omit?: ScrapingJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapingJobInclude<ExtArgs> | null
    /**
     * The filter to search for the ScrapingJob to update in case it exists.
     */
    where: ScrapingJobWhereUniqueInput
    /**
     * In case the ScrapingJob found by the `where` argument doesn't exist, create a new ScrapingJob with this data.
     */
    create: XOR<ScrapingJobCreateInput, ScrapingJobUncheckedCreateInput>
    /**
     * In case the ScrapingJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScrapingJobUpdateInput, ScrapingJobUncheckedUpdateInput>
  }

  /**
   * ScrapingJob delete
   */
  export type ScrapingJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapingJob
     */
    omit?: ScrapingJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapingJobInclude<ExtArgs> | null
    /**
     * Filter which ScrapingJob to delete.
     */
    where: ScrapingJobWhereUniqueInput
  }

  /**
   * ScrapingJob deleteMany
   */
  export type ScrapingJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrapingJobs to delete
     */
    where?: ScrapingJobWhereInput
    /**
     * Limit how many ScrapingJobs to delete.
     */
    limit?: number
  }

  /**
   * ScrapingJob.leads
   */
  export type ScrapingJob$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * ScrapingJob without action
   */
  export type ScrapingJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapingJob
     */
    select?: ScrapingJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapingJob
     */
    omit?: ScrapingJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapingJobInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: $Enums.ERole | null
    password: string | null
    contactNo: string | null
    photo: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isBlocked: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: $Enums.ERole | null
    password: string | null
    contactNo: string | null
    photo: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isBlocked: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    role: number
    password: number
    contactNo: number
    photo: number
    address: number
    createdAt: number
    updatedAt: number
    isBlocked: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    password?: true
    contactNo?: true
    photo?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    isBlocked?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    password?: true
    contactNo?: true
    photo?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    isBlocked?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    password?: true
    contactNo?: true
    photo?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    isBlocked?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    role: $Enums.ERole
    password: string
    contactNo: string
    photo: string | null
    address: string | null
    createdAt: Date
    updatedAt: Date
    isBlocked: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    contactNo?: boolean
    photo?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isBlocked?: boolean
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    docsLinks?: boolean | User$docsLinksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    contactNo?: boolean
    photo?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isBlocked?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    contactNo?: boolean
    photo?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isBlocked?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    contactNo?: boolean
    photo?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isBlocked?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "role" | "password" | "contactNo" | "photo" | "address" | "createdAt" | "updatedAt" | "isBlocked", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | User$campaignsArgs<ExtArgs>
    docsLinks?: boolean | User$docsLinksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
      docsLinks: Prisma.$DocsLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      role: $Enums.ERole
      password: string
      contactNo: string
      photo: string | null
      address: string | null
      createdAt: Date
      updatedAt: Date
      isBlocked: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaigns<T extends User$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, User$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    docsLinks<T extends User$docsLinksArgs<ExtArgs> = {}>(args?: Subset<T, User$docsLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocsLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'ERole'>
    readonly password: FieldRef<"User", 'String'>
    readonly contactNo: FieldRef<"User", 'String'>
    readonly photo: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly isBlocked: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.campaigns
   */
  export type User$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * User.docsLinks
   */
  export type User$docsLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocsLink
     */
    select?: DocsLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocsLink
     */
    omit?: DocsLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocsLinkInclude<ExtArgs> | null
    where?: DocsLinkWhereInput
    orderBy?: DocsLinkOrderByWithRelationInput | DocsLinkOrderByWithRelationInput[]
    cursor?: DocsLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocsLinkScalarFieldEnum | DocsLinkScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AIPromptConfigScalarFieldEnum: {
    id: 'id',
    name: 'name',
    promptType: 'promptType',
    promptText: 'promptText',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AIPromptConfigScalarFieldEnum = (typeof AIPromptConfigScalarFieldEnum)[keyof typeof AIPromptConfigScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    firstMessage: 'firstMessage',
    apifyDatasetId: 'apifyDatasetId',
    status: 'status',
    platform: 'platform',
    location: 'location',
    industry: 'industry',
    followerThreshold: 'followerThreshold',
    specification: 'specification',
    targetIndustryId: 'targetIndustryId',
    targetLocationId: 'targetLocationId',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const ConfigScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConfigScalarFieldEnum = (typeof ConfigScalarFieldEnum)[keyof typeof ConfigScalarFieldEnum]


  export const DocsLinkScalarFieldEnum: {
    id: 'id',
    name: 'name',
    projectName: 'projectName',
    docsLink: 'docsLink',
    prompt: 'prompt',
    postGenerate: 'postGenerate',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocsLinkScalarFieldEnum = (typeof DocsLinkScalarFieldEnum)[keyof typeof DocsLinkScalarFieldEnum]


  export const IndustryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IndustryScalarFieldEnum = (typeof IndustryScalarFieldEnum)[keyof typeof IndustryScalarFieldEnum]


  export const LeadScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    platform: 'platform',
    platformUrl: 'platformUrl',
    profileUsername: 'profileUsername',
    followerCount: 'followerCount',
    bio: 'bio',
    imageUrl: 'imageUrl',
    website: 'website',
    totalScore: 'totalScore',
    role: 'role',
    status: 'status',
    industryId: 'industryId',
    locationId: 'locationId',
    campaignId: 'campaignId',
    scrapingJobId: 'scrapingJobId',
    gmailThreadId: 'gmailThreadId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeadScalarFieldEnum = (typeof LeadScalarFieldEnum)[keyof typeof LeadScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    city: 'city',
    state: 'state',
    country: 'country',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const MediaPostScalarFieldEnum: {
    id: 'id',
    heading: 'heading',
    body: 'body',
    postTime: 'postTime',
    status: 'status',
    docsLinkId: 'docsLinkId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MediaPostScalarFieldEnum = (typeof MediaPostScalarFieldEnum)[keyof typeof MediaPostScalarFieldEnum]


  export const MeetingScalarFieldEnum: {
    id: 'id',
    title: 'title',
    leadId: 'leadId',
    campaignId: 'campaignId',
    startTime: 'startTime',
    endTime: 'endTime',
    meetingLink: 'meetingLink',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MeetingScalarFieldEnum = (typeof MeetingScalarFieldEnum)[keyof typeof MeetingScalarFieldEnum]


  export const OutreachMessageScalarFieldEnum: {
    id: 'id',
    leadId: 'leadId',
    campaignId: 'campaignId',
    type: 'type',
    senderType: 'senderType',
    subject: 'subject',
    body: 'body',
    sentAt: 'sentAt',
    replyStatus: 'replyStatus',
    replyContent: 'replyContent',
    isFollowUp: 'isFollowUp',
    followUpCount: 'followUpCount',
    gmailThreadId: 'gmailThreadId',
    createdAt: 'createdAt'
  };

  export type OutreachMessageScalarFieldEnum = (typeof OutreachMessageScalarFieldEnum)[keyof typeof OutreachMessageScalarFieldEnum]


  export const ScrapingJobScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    platform: 'platform',
    status: 'status',
    targetQuery: 'targetQuery',
    leadsFound: 'leadsFound',
    leadsExtracted: 'leadsExtracted',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    errorLog: 'errorLog',
    createdAt: 'createdAt'
  };

  export type ScrapingJobScalarFieldEnum = (typeof ScrapingJobScalarFieldEnum)[keyof typeof ScrapingJobScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    role: 'role',
    password: 'password',
    contactNo: 'contactNo',
    photo: 'photo',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isBlocked: 'isBlocked'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ECampaignStatus'
   */
  export type EnumECampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ECampaignStatus'>
    


  /**
   * Reference to a field of type 'ECampaignStatus[]'
   */
  export type ListEnumECampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ECampaignStatus[]'>
    


  /**
   * Reference to a field of type 'EPlatform'
   */
  export type EnumEPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EPlatform'>
    


  /**
   * Reference to a field of type 'EPlatform[]'
   */
  export type ListEnumEPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EPlatform[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ELeadStatus'
   */
  export type EnumELeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ELeadStatus'>
    


  /**
   * Reference to a field of type 'ELeadStatus[]'
   */
  export type ListEnumELeadStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ELeadStatus[]'>
    


  /**
   * Reference to a field of type 'EMediaPostStatus'
   */
  export type EnumEMediaPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EMediaPostStatus'>
    


  /**
   * Reference to a field of type 'EMediaPostStatus[]'
   */
  export type ListEnumEMediaPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EMediaPostStatus[]'>
    


  /**
   * Reference to a field of type 'EMeetingStatus'
   */
  export type EnumEMeetingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EMeetingStatus'>
    


  /**
   * Reference to a field of type 'EMeetingStatus[]'
   */
  export type ListEnumEMeetingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EMeetingStatus[]'>
    


  /**
   * Reference to a field of type 'EOutreachType'
   */
  export type EnumEOutreachTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EOutreachType'>
    


  /**
   * Reference to a field of type 'EOutreachType[]'
   */
  export type ListEnumEOutreachTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EOutreachType[]'>
    


  /**
   * Reference to a field of type 'EMessageSender'
   */
  export type EnumEMessageSenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EMessageSender'>
    


  /**
   * Reference to a field of type 'EMessageSender[]'
   */
  export type ListEnumEMessageSenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EMessageSender[]'>
    


  /**
   * Reference to a field of type 'EReplyStatus'
   */
  export type EnumEReplyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EReplyStatus'>
    


  /**
   * Reference to a field of type 'EReplyStatus[]'
   */
  export type ListEnumEReplyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EReplyStatus[]'>
    


  /**
   * Reference to a field of type 'EScrapingJobStatus'
   */
  export type EnumEScrapingJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EScrapingJobStatus'>
    


  /**
   * Reference to a field of type 'EScrapingJobStatus[]'
   */
  export type ListEnumEScrapingJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EScrapingJobStatus[]'>
    


  /**
   * Reference to a field of type 'ERole'
   */
  export type EnumERoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ERole'>
    


  /**
   * Reference to a field of type 'ERole[]'
   */
  export type ListEnumERoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ERole[]'>
    
  /**
   * Deep Input Types
   */


  export type AIPromptConfigWhereInput = {
    AND?: AIPromptConfigWhereInput | AIPromptConfigWhereInput[]
    OR?: AIPromptConfigWhereInput[]
    NOT?: AIPromptConfigWhereInput | AIPromptConfigWhereInput[]
    id?: StringFilter<"AIPromptConfig"> | string
    name?: StringFilter<"AIPromptConfig"> | string
    promptType?: StringFilter<"AIPromptConfig"> | string
    promptText?: StringFilter<"AIPromptConfig"> | string
    isActive?: BoolFilter<"AIPromptConfig"> | boolean
    createdAt?: DateTimeFilter<"AIPromptConfig"> | Date | string
    updatedAt?: DateTimeFilter<"AIPromptConfig"> | Date | string
  }

  export type AIPromptConfigOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    promptType?: SortOrder
    promptText?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIPromptConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AIPromptConfigWhereInput | AIPromptConfigWhereInput[]
    OR?: AIPromptConfigWhereInput[]
    NOT?: AIPromptConfigWhereInput | AIPromptConfigWhereInput[]
    name?: StringFilter<"AIPromptConfig"> | string
    promptType?: StringFilter<"AIPromptConfig"> | string
    promptText?: StringFilter<"AIPromptConfig"> | string
    isActive?: BoolFilter<"AIPromptConfig"> | boolean
    createdAt?: DateTimeFilter<"AIPromptConfig"> | Date | string
    updatedAt?: DateTimeFilter<"AIPromptConfig"> | Date | string
  }, "id">

  export type AIPromptConfigOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    promptType?: SortOrder
    promptText?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AIPromptConfigCountOrderByAggregateInput
    _max?: AIPromptConfigMaxOrderByAggregateInput
    _min?: AIPromptConfigMinOrderByAggregateInput
  }

  export type AIPromptConfigScalarWhereWithAggregatesInput = {
    AND?: AIPromptConfigScalarWhereWithAggregatesInput | AIPromptConfigScalarWhereWithAggregatesInput[]
    OR?: AIPromptConfigScalarWhereWithAggregatesInput[]
    NOT?: AIPromptConfigScalarWhereWithAggregatesInput | AIPromptConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIPromptConfig"> | string
    name?: StringWithAggregatesFilter<"AIPromptConfig"> | string
    promptType?: StringWithAggregatesFilter<"AIPromptConfig"> | string
    promptText?: StringWithAggregatesFilter<"AIPromptConfig"> | string
    isActive?: BoolWithAggregatesFilter<"AIPromptConfig"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AIPromptConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AIPromptConfig"> | Date | string
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    firstMessage?: StringNullableFilter<"Campaign"> | string | null
    apifyDatasetId?: StringNullableFilter<"Campaign"> | string | null
    status?: EnumECampaignStatusFilter<"Campaign"> | $Enums.ECampaignStatus
    platform?: EnumEPlatformFilter<"Campaign"> | $Enums.EPlatform
    location?: StringNullableFilter<"Campaign"> | string | null
    industry?: StringNullableFilter<"Campaign"> | string | null
    followerThreshold?: IntFilter<"Campaign"> | number
    specification?: StringNullableFilter<"Campaign"> | string | null
    targetIndustryId?: StringNullableFilter<"Campaign"> | string | null
    targetLocationId?: StringNullableFilter<"Campaign"> | string | null
    createdById?: StringFilter<"Campaign"> | string
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    targetIndustry?: XOR<IndustryNullableScalarRelationFilter, IndustryWhereInput> | null
    targetLocation?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    leads?: LeadListRelationFilter
    outreachMessages?: OutreachMessageListRelationFilter
    scrapingJobs?: ScrapingJobListRelationFilter
    meetings?: MeetingListRelationFilter
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    firstMessage?: SortOrderInput | SortOrder
    apifyDatasetId?: SortOrderInput | SortOrder
    status?: SortOrder
    platform?: SortOrder
    location?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    followerThreshold?: SortOrder
    specification?: SortOrderInput | SortOrder
    targetIndustryId?: SortOrderInput | SortOrder
    targetLocationId?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    targetIndustry?: IndustryOrderByWithRelationInput
    targetLocation?: LocationOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    leads?: LeadOrderByRelationAggregateInput
    outreachMessages?: OutreachMessageOrderByRelationAggregateInput
    scrapingJobs?: ScrapingJobOrderByRelationAggregateInput
    meetings?: MeetingOrderByRelationAggregateInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    name?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    firstMessage?: StringNullableFilter<"Campaign"> | string | null
    apifyDatasetId?: StringNullableFilter<"Campaign"> | string | null
    status?: EnumECampaignStatusFilter<"Campaign"> | $Enums.ECampaignStatus
    platform?: EnumEPlatformFilter<"Campaign"> | $Enums.EPlatform
    location?: StringNullableFilter<"Campaign"> | string | null
    industry?: StringNullableFilter<"Campaign"> | string | null
    followerThreshold?: IntFilter<"Campaign"> | number
    specification?: StringNullableFilter<"Campaign"> | string | null
    targetIndustryId?: StringNullableFilter<"Campaign"> | string | null
    targetLocationId?: StringNullableFilter<"Campaign"> | string | null
    createdById?: StringFilter<"Campaign"> | string
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    targetIndustry?: XOR<IndustryNullableScalarRelationFilter, IndustryWhereInput> | null
    targetLocation?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    leads?: LeadListRelationFilter
    outreachMessages?: OutreachMessageListRelationFilter
    scrapingJobs?: ScrapingJobListRelationFilter
    meetings?: MeetingListRelationFilter
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    firstMessage?: SortOrderInput | SortOrder
    apifyDatasetId?: SortOrderInput | SortOrder
    status?: SortOrder
    platform?: SortOrder
    location?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    followerThreshold?: SortOrder
    specification?: SortOrderInput | SortOrder
    targetIndustryId?: SortOrderInput | SortOrder
    targetLocationId?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campaign"> | string
    name?: StringWithAggregatesFilter<"Campaign"> | string
    description?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    firstMessage?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    apifyDatasetId?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    status?: EnumECampaignStatusWithAggregatesFilter<"Campaign"> | $Enums.ECampaignStatus
    platform?: EnumEPlatformWithAggregatesFilter<"Campaign"> | $Enums.EPlatform
    location?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    industry?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    followerThreshold?: IntWithAggregatesFilter<"Campaign"> | number
    specification?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    targetIndustryId?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    targetLocationId?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    createdById?: StringWithAggregatesFilter<"Campaign"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
  }

  export type ConfigWhereInput = {
    AND?: ConfigWhereInput | ConfigWhereInput[]
    OR?: ConfigWhereInput[]
    NOT?: ConfigWhereInput | ConfigWhereInput[]
    id?: StringFilter<"Config"> | string
    key?: StringFilter<"Config"> | string
    value?: StringFilter<"Config"> | string
    createdAt?: DateTimeFilter<"Config"> | Date | string
    updatedAt?: DateTimeFilter<"Config"> | Date | string
  }

  export type ConfigOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: ConfigWhereInput | ConfigWhereInput[]
    OR?: ConfigWhereInput[]
    NOT?: ConfigWhereInput | ConfigWhereInput[]
    value?: StringFilter<"Config"> | string
    createdAt?: DateTimeFilter<"Config"> | Date | string
    updatedAt?: DateTimeFilter<"Config"> | Date | string
  }, "id" | "key">

  export type ConfigOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConfigCountOrderByAggregateInput
    _max?: ConfigMaxOrderByAggregateInput
    _min?: ConfigMinOrderByAggregateInput
  }

  export type ConfigScalarWhereWithAggregatesInput = {
    AND?: ConfigScalarWhereWithAggregatesInput | ConfigScalarWhereWithAggregatesInput[]
    OR?: ConfigScalarWhereWithAggregatesInput[]
    NOT?: ConfigScalarWhereWithAggregatesInput | ConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Config"> | string
    key?: StringWithAggregatesFilter<"Config"> | string
    value?: StringWithAggregatesFilter<"Config"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Config"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Config"> | Date | string
  }

  export type DocsLinkWhereInput = {
    AND?: DocsLinkWhereInput | DocsLinkWhereInput[]
    OR?: DocsLinkWhereInput[]
    NOT?: DocsLinkWhereInput | DocsLinkWhereInput[]
    id?: StringFilter<"DocsLink"> | string
    name?: StringFilter<"DocsLink"> | string
    projectName?: StringFilter<"DocsLink"> | string
    docsLink?: StringFilter<"DocsLink"> | string
    prompt?: StringNullableFilter<"DocsLink"> | string | null
    postGenerate?: IntFilter<"DocsLink"> | number
    createdById?: StringFilter<"DocsLink"> | string
    createdAt?: DateTimeFilter<"DocsLink"> | Date | string
    updatedAt?: DateTimeFilter<"DocsLink"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    posts?: MediaPostListRelationFilter
  }

  export type DocsLinkOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    projectName?: SortOrder
    docsLink?: SortOrder
    prompt?: SortOrderInput | SortOrder
    postGenerate?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    posts?: MediaPostOrderByRelationAggregateInput
  }

  export type DocsLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocsLinkWhereInput | DocsLinkWhereInput[]
    OR?: DocsLinkWhereInput[]
    NOT?: DocsLinkWhereInput | DocsLinkWhereInput[]
    name?: StringFilter<"DocsLink"> | string
    projectName?: StringFilter<"DocsLink"> | string
    docsLink?: StringFilter<"DocsLink"> | string
    prompt?: StringNullableFilter<"DocsLink"> | string | null
    postGenerate?: IntFilter<"DocsLink"> | number
    createdById?: StringFilter<"DocsLink"> | string
    createdAt?: DateTimeFilter<"DocsLink"> | Date | string
    updatedAt?: DateTimeFilter<"DocsLink"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    posts?: MediaPostListRelationFilter
  }, "id">

  export type DocsLinkOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    projectName?: SortOrder
    docsLink?: SortOrder
    prompt?: SortOrderInput | SortOrder
    postGenerate?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocsLinkCountOrderByAggregateInput
    _avg?: DocsLinkAvgOrderByAggregateInput
    _max?: DocsLinkMaxOrderByAggregateInput
    _min?: DocsLinkMinOrderByAggregateInput
    _sum?: DocsLinkSumOrderByAggregateInput
  }

  export type DocsLinkScalarWhereWithAggregatesInput = {
    AND?: DocsLinkScalarWhereWithAggregatesInput | DocsLinkScalarWhereWithAggregatesInput[]
    OR?: DocsLinkScalarWhereWithAggregatesInput[]
    NOT?: DocsLinkScalarWhereWithAggregatesInput | DocsLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocsLink"> | string
    name?: StringWithAggregatesFilter<"DocsLink"> | string
    projectName?: StringWithAggregatesFilter<"DocsLink"> | string
    docsLink?: StringWithAggregatesFilter<"DocsLink"> | string
    prompt?: StringNullableWithAggregatesFilter<"DocsLink"> | string | null
    postGenerate?: IntWithAggregatesFilter<"DocsLink"> | number
    createdById?: StringWithAggregatesFilter<"DocsLink"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DocsLink"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DocsLink"> | Date | string
  }

  export type IndustryWhereInput = {
    AND?: IndustryWhereInput | IndustryWhereInput[]
    OR?: IndustryWhereInput[]
    NOT?: IndustryWhereInput | IndustryWhereInput[]
    id?: StringFilter<"Industry"> | string
    name?: StringFilter<"Industry"> | string
    description?: StringNullableFilter<"Industry"> | string | null
    isActive?: BoolFilter<"Industry"> | boolean
    createdAt?: DateTimeFilter<"Industry"> | Date | string
    updatedAt?: DateTimeFilter<"Industry"> | Date | string
    leads?: LeadListRelationFilter
    campaigns?: CampaignListRelationFilter
  }

  export type IndustryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    leads?: LeadOrderByRelationAggregateInput
    campaigns?: CampaignOrderByRelationAggregateInput
  }

  export type IndustryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: IndustryWhereInput | IndustryWhereInput[]
    OR?: IndustryWhereInput[]
    NOT?: IndustryWhereInput | IndustryWhereInput[]
    description?: StringNullableFilter<"Industry"> | string | null
    isActive?: BoolFilter<"Industry"> | boolean
    createdAt?: DateTimeFilter<"Industry"> | Date | string
    updatedAt?: DateTimeFilter<"Industry"> | Date | string
    leads?: LeadListRelationFilter
    campaigns?: CampaignListRelationFilter
  }, "id" | "name">

  export type IndustryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IndustryCountOrderByAggregateInput
    _max?: IndustryMaxOrderByAggregateInput
    _min?: IndustryMinOrderByAggregateInput
  }

  export type IndustryScalarWhereWithAggregatesInput = {
    AND?: IndustryScalarWhereWithAggregatesInput | IndustryScalarWhereWithAggregatesInput[]
    OR?: IndustryScalarWhereWithAggregatesInput[]
    NOT?: IndustryScalarWhereWithAggregatesInput | IndustryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Industry"> | string
    name?: StringWithAggregatesFilter<"Industry"> | string
    description?: StringNullableWithAggregatesFilter<"Industry"> | string | null
    isActive?: BoolWithAggregatesFilter<"Industry"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Industry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Industry"> | Date | string
  }

  export type LeadWhereInput = {
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    id?: StringFilter<"Lead"> | string
    name?: StringFilter<"Lead"> | string
    email?: StringNullableFilter<"Lead"> | string | null
    phone?: StringNullableFilter<"Lead"> | string | null
    platform?: EnumEPlatformFilter<"Lead"> | $Enums.EPlatform
    platformUrl?: StringNullableFilter<"Lead"> | string | null
    profileUsername?: StringNullableFilter<"Lead"> | string | null
    followerCount?: IntFilter<"Lead"> | number
    bio?: StringNullableFilter<"Lead"> | string | null
    imageUrl?: StringNullableFilter<"Lead"> | string | null
    website?: StringNullableFilter<"Lead"> | string | null
    totalScore?: FloatNullableFilter<"Lead"> | number | null
    role?: StringNullableFilter<"Lead"> | string | null
    status?: EnumELeadStatusFilter<"Lead"> | $Enums.ELeadStatus
    industryId?: StringNullableFilter<"Lead"> | string | null
    locationId?: StringNullableFilter<"Lead"> | string | null
    campaignId?: StringNullableFilter<"Lead"> | string | null
    scrapingJobId?: StringNullableFilter<"Lead"> | string | null
    gmailThreadId?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    industry?: XOR<IndustryNullableScalarRelationFilter, IndustryWhereInput> | null
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    campaign?: XOR<CampaignNullableScalarRelationFilter, CampaignWhereInput> | null
    scrapingJob?: XOR<ScrapingJobNullableScalarRelationFilter, ScrapingJobWhereInput> | null
    outreachMessages?: OutreachMessageListRelationFilter
    meetings?: MeetingListRelationFilter
  }

  export type LeadOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    platform?: SortOrder
    platformUrl?: SortOrderInput | SortOrder
    profileUsername?: SortOrderInput | SortOrder
    followerCount?: SortOrder
    bio?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    totalScore?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    status?: SortOrder
    industryId?: SortOrderInput | SortOrder
    locationId?: SortOrderInput | SortOrder
    campaignId?: SortOrderInput | SortOrder
    scrapingJobId?: SortOrderInput | SortOrder
    gmailThreadId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    industry?: IndustryOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
    campaign?: CampaignOrderByWithRelationInput
    scrapingJob?: ScrapingJobOrderByWithRelationInput
    outreachMessages?: OutreachMessageOrderByRelationAggregateInput
    meetings?: MeetingOrderByRelationAggregateInput
  }

  export type LeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    gmailThreadId?: string
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    name?: StringFilter<"Lead"> | string
    email?: StringNullableFilter<"Lead"> | string | null
    phone?: StringNullableFilter<"Lead"> | string | null
    platform?: EnumEPlatformFilter<"Lead"> | $Enums.EPlatform
    platformUrl?: StringNullableFilter<"Lead"> | string | null
    profileUsername?: StringNullableFilter<"Lead"> | string | null
    followerCount?: IntFilter<"Lead"> | number
    bio?: StringNullableFilter<"Lead"> | string | null
    imageUrl?: StringNullableFilter<"Lead"> | string | null
    website?: StringNullableFilter<"Lead"> | string | null
    totalScore?: FloatNullableFilter<"Lead"> | number | null
    role?: StringNullableFilter<"Lead"> | string | null
    status?: EnumELeadStatusFilter<"Lead"> | $Enums.ELeadStatus
    industryId?: StringNullableFilter<"Lead"> | string | null
    locationId?: StringNullableFilter<"Lead"> | string | null
    campaignId?: StringNullableFilter<"Lead"> | string | null
    scrapingJobId?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    industry?: XOR<IndustryNullableScalarRelationFilter, IndustryWhereInput> | null
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    campaign?: XOR<CampaignNullableScalarRelationFilter, CampaignWhereInput> | null
    scrapingJob?: XOR<ScrapingJobNullableScalarRelationFilter, ScrapingJobWhereInput> | null
    outreachMessages?: OutreachMessageListRelationFilter
    meetings?: MeetingListRelationFilter
  }, "id" | "gmailThreadId">

  export type LeadOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    platform?: SortOrder
    platformUrl?: SortOrderInput | SortOrder
    profileUsername?: SortOrderInput | SortOrder
    followerCount?: SortOrder
    bio?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    totalScore?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    status?: SortOrder
    industryId?: SortOrderInput | SortOrder
    locationId?: SortOrderInput | SortOrder
    campaignId?: SortOrderInput | SortOrder
    scrapingJobId?: SortOrderInput | SortOrder
    gmailThreadId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeadCountOrderByAggregateInput
    _avg?: LeadAvgOrderByAggregateInput
    _max?: LeadMaxOrderByAggregateInput
    _min?: LeadMinOrderByAggregateInput
    _sum?: LeadSumOrderByAggregateInput
  }

  export type LeadScalarWhereWithAggregatesInput = {
    AND?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    OR?: LeadScalarWhereWithAggregatesInput[]
    NOT?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lead"> | string
    name?: StringWithAggregatesFilter<"Lead"> | string
    email?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    platform?: EnumEPlatformWithAggregatesFilter<"Lead"> | $Enums.EPlatform
    platformUrl?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    profileUsername?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    followerCount?: IntWithAggregatesFilter<"Lead"> | number
    bio?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    website?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    totalScore?: FloatNullableWithAggregatesFilter<"Lead"> | number | null
    role?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    status?: EnumELeadStatusWithAggregatesFilter<"Lead"> | $Enums.ELeadStatus
    industryId?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    locationId?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    campaignId?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    scrapingJobId?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    gmailThreadId?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    state?: StringNullableFilter<"Location"> | string | null
    country?: StringFilter<"Location"> | string
    isActive?: BoolFilter<"Location"> | boolean
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    leads?: LeadListRelationFilter
    campaigns?: CampaignListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    city?: SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    leads?: LeadOrderByRelationAggregateInput
    campaigns?: CampaignOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    city_state_country?: LocationCityStateCountryCompoundUniqueInput
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    city?: StringFilter<"Location"> | string
    state?: StringNullableFilter<"Location"> | string | null
    country?: StringFilter<"Location"> | string
    isActive?: BoolFilter<"Location"> | boolean
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    leads?: LeadListRelationFilter
    campaigns?: CampaignListRelationFilter
  }, "id" | "city_state_country">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    city?: SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Location"> | string
    city?: StringWithAggregatesFilter<"Location"> | string
    state?: StringNullableWithAggregatesFilter<"Location"> | string | null
    country?: StringWithAggregatesFilter<"Location"> | string
    isActive?: BoolWithAggregatesFilter<"Location"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
  }

  export type MediaPostWhereInput = {
    AND?: MediaPostWhereInput | MediaPostWhereInput[]
    OR?: MediaPostWhereInput[]
    NOT?: MediaPostWhereInput | MediaPostWhereInput[]
    id?: StringFilter<"MediaPost"> | string
    heading?: StringFilter<"MediaPost"> | string
    body?: StringFilter<"MediaPost"> | string
    postTime?: DateTimeFilter<"MediaPost"> | Date | string
    status?: EnumEMediaPostStatusFilter<"MediaPost"> | $Enums.EMediaPostStatus
    docsLinkId?: StringFilter<"MediaPost"> | string
    createdAt?: DateTimeFilter<"MediaPost"> | Date | string
    updatedAt?: DateTimeFilter<"MediaPost"> | Date | string
    docsLink?: XOR<DocsLinkScalarRelationFilter, DocsLinkWhereInput>
  }

  export type MediaPostOrderByWithRelationInput = {
    id?: SortOrder
    heading?: SortOrder
    body?: SortOrder
    postTime?: SortOrder
    status?: SortOrder
    docsLinkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    docsLink?: DocsLinkOrderByWithRelationInput
  }

  export type MediaPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaPostWhereInput | MediaPostWhereInput[]
    OR?: MediaPostWhereInput[]
    NOT?: MediaPostWhereInput | MediaPostWhereInput[]
    heading?: StringFilter<"MediaPost"> | string
    body?: StringFilter<"MediaPost"> | string
    postTime?: DateTimeFilter<"MediaPost"> | Date | string
    status?: EnumEMediaPostStatusFilter<"MediaPost"> | $Enums.EMediaPostStatus
    docsLinkId?: StringFilter<"MediaPost"> | string
    createdAt?: DateTimeFilter<"MediaPost"> | Date | string
    updatedAt?: DateTimeFilter<"MediaPost"> | Date | string
    docsLink?: XOR<DocsLinkScalarRelationFilter, DocsLinkWhereInput>
  }, "id">

  export type MediaPostOrderByWithAggregationInput = {
    id?: SortOrder
    heading?: SortOrder
    body?: SortOrder
    postTime?: SortOrder
    status?: SortOrder
    docsLinkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MediaPostCountOrderByAggregateInput
    _max?: MediaPostMaxOrderByAggregateInput
    _min?: MediaPostMinOrderByAggregateInput
  }

  export type MediaPostScalarWhereWithAggregatesInput = {
    AND?: MediaPostScalarWhereWithAggregatesInput | MediaPostScalarWhereWithAggregatesInput[]
    OR?: MediaPostScalarWhereWithAggregatesInput[]
    NOT?: MediaPostScalarWhereWithAggregatesInput | MediaPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MediaPost"> | string
    heading?: StringWithAggregatesFilter<"MediaPost"> | string
    body?: StringWithAggregatesFilter<"MediaPost"> | string
    postTime?: DateTimeWithAggregatesFilter<"MediaPost"> | Date | string
    status?: EnumEMediaPostStatusWithAggregatesFilter<"MediaPost"> | $Enums.EMediaPostStatus
    docsLinkId?: StringWithAggregatesFilter<"MediaPost"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MediaPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MediaPost"> | Date | string
  }

  export type MeetingWhereInput = {
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    id?: StringFilter<"Meeting"> | string
    title?: StringFilter<"Meeting"> | string
    leadId?: StringFilter<"Meeting"> | string
    campaignId?: StringNullableFilter<"Meeting"> | string | null
    startTime?: DateTimeFilter<"Meeting"> | Date | string
    endTime?: DateTimeFilter<"Meeting"> | Date | string
    meetingLink?: StringNullableFilter<"Meeting"> | string | null
    status?: EnumEMeetingStatusFilter<"Meeting"> | $Enums.EMeetingStatus
    notes?: StringNullableFilter<"Meeting"> | string | null
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
    campaign?: XOR<CampaignNullableScalarRelationFilter, CampaignWhereInput> | null
  }

  export type MeetingOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    leadId?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    meetingLink?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lead?: LeadOrderByWithRelationInput
    campaign?: CampaignOrderByWithRelationInput
  }

  export type MeetingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    title?: StringFilter<"Meeting"> | string
    leadId?: StringFilter<"Meeting"> | string
    campaignId?: StringNullableFilter<"Meeting"> | string | null
    startTime?: DateTimeFilter<"Meeting"> | Date | string
    endTime?: DateTimeFilter<"Meeting"> | Date | string
    meetingLink?: StringNullableFilter<"Meeting"> | string | null
    status?: EnumEMeetingStatusFilter<"Meeting"> | $Enums.EMeetingStatus
    notes?: StringNullableFilter<"Meeting"> | string | null
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
    campaign?: XOR<CampaignNullableScalarRelationFilter, CampaignWhereInput> | null
  }, "id">

  export type MeetingOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    leadId?: SortOrder
    campaignId?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    meetingLink?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MeetingCountOrderByAggregateInput
    _max?: MeetingMaxOrderByAggregateInput
    _min?: MeetingMinOrderByAggregateInput
  }

  export type MeetingScalarWhereWithAggregatesInput = {
    AND?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    OR?: MeetingScalarWhereWithAggregatesInput[]
    NOT?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meeting"> | string
    title?: StringWithAggregatesFilter<"Meeting"> | string
    leadId?: StringWithAggregatesFilter<"Meeting"> | string
    campaignId?: StringNullableWithAggregatesFilter<"Meeting"> | string | null
    startTime?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    meetingLink?: StringNullableWithAggregatesFilter<"Meeting"> | string | null
    status?: EnumEMeetingStatusWithAggregatesFilter<"Meeting"> | $Enums.EMeetingStatus
    notes?: StringNullableWithAggregatesFilter<"Meeting"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
  }

  export type OutreachMessageWhereInput = {
    AND?: OutreachMessageWhereInput | OutreachMessageWhereInput[]
    OR?: OutreachMessageWhereInput[]
    NOT?: OutreachMessageWhereInput | OutreachMessageWhereInput[]
    id?: StringFilter<"OutreachMessage"> | string
    leadId?: StringFilter<"OutreachMessage"> | string
    campaignId?: StringFilter<"OutreachMessage"> | string
    type?: EnumEOutreachTypeFilter<"OutreachMessage"> | $Enums.EOutreachType
    senderType?: EnumEMessageSenderFilter<"OutreachMessage"> | $Enums.EMessageSender
    subject?: StringNullableFilter<"OutreachMessage"> | string | null
    body?: StringFilter<"OutreachMessage"> | string
    sentAt?: DateTimeNullableFilter<"OutreachMessage"> | Date | string | null
    replyStatus?: EnumEReplyStatusFilter<"OutreachMessage"> | $Enums.EReplyStatus
    replyContent?: StringNullableFilter<"OutreachMessage"> | string | null
    isFollowUp?: BoolFilter<"OutreachMessage"> | boolean
    followUpCount?: IntFilter<"OutreachMessage"> | number
    gmailThreadId?: StringNullableFilter<"OutreachMessage"> | string | null
    createdAt?: DateTimeFilter<"OutreachMessage"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }

  export type OutreachMessageOrderByWithRelationInput = {
    id?: SortOrder
    leadId?: SortOrder
    campaignId?: SortOrder
    type?: SortOrder
    senderType?: SortOrder
    subject?: SortOrderInput | SortOrder
    body?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    replyStatus?: SortOrder
    replyContent?: SortOrderInput | SortOrder
    isFollowUp?: SortOrder
    followUpCount?: SortOrder
    gmailThreadId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lead?: LeadOrderByWithRelationInput
    campaign?: CampaignOrderByWithRelationInput
  }

  export type OutreachMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OutreachMessageWhereInput | OutreachMessageWhereInput[]
    OR?: OutreachMessageWhereInput[]
    NOT?: OutreachMessageWhereInput | OutreachMessageWhereInput[]
    leadId?: StringFilter<"OutreachMessage"> | string
    campaignId?: StringFilter<"OutreachMessage"> | string
    type?: EnumEOutreachTypeFilter<"OutreachMessage"> | $Enums.EOutreachType
    senderType?: EnumEMessageSenderFilter<"OutreachMessage"> | $Enums.EMessageSender
    subject?: StringNullableFilter<"OutreachMessage"> | string | null
    body?: StringFilter<"OutreachMessage"> | string
    sentAt?: DateTimeNullableFilter<"OutreachMessage"> | Date | string | null
    replyStatus?: EnumEReplyStatusFilter<"OutreachMessage"> | $Enums.EReplyStatus
    replyContent?: StringNullableFilter<"OutreachMessage"> | string | null
    isFollowUp?: BoolFilter<"OutreachMessage"> | boolean
    followUpCount?: IntFilter<"OutreachMessage"> | number
    gmailThreadId?: StringNullableFilter<"OutreachMessage"> | string | null
    createdAt?: DateTimeFilter<"OutreachMessage"> | Date | string
    lead?: XOR<LeadScalarRelationFilter, LeadWhereInput>
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
  }, "id">

  export type OutreachMessageOrderByWithAggregationInput = {
    id?: SortOrder
    leadId?: SortOrder
    campaignId?: SortOrder
    type?: SortOrder
    senderType?: SortOrder
    subject?: SortOrderInput | SortOrder
    body?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    replyStatus?: SortOrder
    replyContent?: SortOrderInput | SortOrder
    isFollowUp?: SortOrder
    followUpCount?: SortOrder
    gmailThreadId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OutreachMessageCountOrderByAggregateInput
    _avg?: OutreachMessageAvgOrderByAggregateInput
    _max?: OutreachMessageMaxOrderByAggregateInput
    _min?: OutreachMessageMinOrderByAggregateInput
    _sum?: OutreachMessageSumOrderByAggregateInput
  }

  export type OutreachMessageScalarWhereWithAggregatesInput = {
    AND?: OutreachMessageScalarWhereWithAggregatesInput | OutreachMessageScalarWhereWithAggregatesInput[]
    OR?: OutreachMessageScalarWhereWithAggregatesInput[]
    NOT?: OutreachMessageScalarWhereWithAggregatesInput | OutreachMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OutreachMessage"> | string
    leadId?: StringWithAggregatesFilter<"OutreachMessage"> | string
    campaignId?: StringWithAggregatesFilter<"OutreachMessage"> | string
    type?: EnumEOutreachTypeWithAggregatesFilter<"OutreachMessage"> | $Enums.EOutreachType
    senderType?: EnumEMessageSenderWithAggregatesFilter<"OutreachMessage"> | $Enums.EMessageSender
    subject?: StringNullableWithAggregatesFilter<"OutreachMessage"> | string | null
    body?: StringWithAggregatesFilter<"OutreachMessage"> | string
    sentAt?: DateTimeNullableWithAggregatesFilter<"OutreachMessage"> | Date | string | null
    replyStatus?: EnumEReplyStatusWithAggregatesFilter<"OutreachMessage"> | $Enums.EReplyStatus
    replyContent?: StringNullableWithAggregatesFilter<"OutreachMessage"> | string | null
    isFollowUp?: BoolWithAggregatesFilter<"OutreachMessage"> | boolean
    followUpCount?: IntWithAggregatesFilter<"OutreachMessage"> | number
    gmailThreadId?: StringNullableWithAggregatesFilter<"OutreachMessage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OutreachMessage"> | Date | string
  }

  export type ScrapingJobWhereInput = {
    AND?: ScrapingJobWhereInput | ScrapingJobWhereInput[]
    OR?: ScrapingJobWhereInput[]
    NOT?: ScrapingJobWhereInput | ScrapingJobWhereInput[]
    id?: StringFilter<"ScrapingJob"> | string
    campaignId?: StringFilter<"ScrapingJob"> | string
    platform?: EnumEPlatformFilter<"ScrapingJob"> | $Enums.EPlatform
    status?: EnumEScrapingJobStatusFilter<"ScrapingJob"> | $Enums.EScrapingJobStatus
    targetQuery?: StringNullableFilter<"ScrapingJob"> | string | null
    leadsFound?: IntFilter<"ScrapingJob"> | number
    leadsExtracted?: IntFilter<"ScrapingJob"> | number
    startedAt?: DateTimeNullableFilter<"ScrapingJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ScrapingJob"> | Date | string | null
    errorLog?: StringNullableFilter<"ScrapingJob"> | string | null
    createdAt?: DateTimeFilter<"ScrapingJob"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    leads?: LeadListRelationFilter
  }

  export type ScrapingJobOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    platform?: SortOrder
    status?: SortOrder
    targetQuery?: SortOrderInput | SortOrder
    leadsFound?: SortOrder
    leadsExtracted?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    errorLog?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
    leads?: LeadOrderByRelationAggregateInput
  }

  export type ScrapingJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScrapingJobWhereInput | ScrapingJobWhereInput[]
    OR?: ScrapingJobWhereInput[]
    NOT?: ScrapingJobWhereInput | ScrapingJobWhereInput[]
    campaignId?: StringFilter<"ScrapingJob"> | string
    platform?: EnumEPlatformFilter<"ScrapingJob"> | $Enums.EPlatform
    status?: EnumEScrapingJobStatusFilter<"ScrapingJob"> | $Enums.EScrapingJobStatus
    targetQuery?: StringNullableFilter<"ScrapingJob"> | string | null
    leadsFound?: IntFilter<"ScrapingJob"> | number
    leadsExtracted?: IntFilter<"ScrapingJob"> | number
    startedAt?: DateTimeNullableFilter<"ScrapingJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ScrapingJob"> | Date | string | null
    errorLog?: StringNullableFilter<"ScrapingJob"> | string | null
    createdAt?: DateTimeFilter<"ScrapingJob"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    leads?: LeadListRelationFilter
  }, "id">

  export type ScrapingJobOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    platform?: SortOrder
    status?: SortOrder
    targetQuery?: SortOrderInput | SortOrder
    leadsFound?: SortOrder
    leadsExtracted?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    errorLog?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ScrapingJobCountOrderByAggregateInput
    _avg?: ScrapingJobAvgOrderByAggregateInput
    _max?: ScrapingJobMaxOrderByAggregateInput
    _min?: ScrapingJobMinOrderByAggregateInput
    _sum?: ScrapingJobSumOrderByAggregateInput
  }

  export type ScrapingJobScalarWhereWithAggregatesInput = {
    AND?: ScrapingJobScalarWhereWithAggregatesInput | ScrapingJobScalarWhereWithAggregatesInput[]
    OR?: ScrapingJobScalarWhereWithAggregatesInput[]
    NOT?: ScrapingJobScalarWhereWithAggregatesInput | ScrapingJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScrapingJob"> | string
    campaignId?: StringWithAggregatesFilter<"ScrapingJob"> | string
    platform?: EnumEPlatformWithAggregatesFilter<"ScrapingJob"> | $Enums.EPlatform
    status?: EnumEScrapingJobStatusWithAggregatesFilter<"ScrapingJob"> | $Enums.EScrapingJobStatus
    targetQuery?: StringNullableWithAggregatesFilter<"ScrapingJob"> | string | null
    leadsFound?: IntWithAggregatesFilter<"ScrapingJob"> | number
    leadsExtracted?: IntWithAggregatesFilter<"ScrapingJob"> | number
    startedAt?: DateTimeNullableWithAggregatesFilter<"ScrapingJob"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"ScrapingJob"> | Date | string | null
    errorLog?: StringNullableWithAggregatesFilter<"ScrapingJob"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ScrapingJob"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumERoleFilter<"User"> | $Enums.ERole
    password?: StringFilter<"User"> | string
    contactNo?: StringFilter<"User"> | string
    photo?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isBlocked?: BoolFilter<"User"> | boolean
    campaigns?: CampaignListRelationFilter
    docsLinks?: DocsLinkListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    contactNo?: SortOrder
    photo?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isBlocked?: SortOrder
    campaigns?: CampaignOrderByRelationAggregateInput
    docsLinks?: DocsLinkOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumERoleFilter<"User"> | $Enums.ERole
    password?: StringFilter<"User"> | string
    contactNo?: StringFilter<"User"> | string
    photo?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isBlocked?: BoolFilter<"User"> | boolean
    campaigns?: CampaignListRelationFilter
    docsLinks?: DocsLinkListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    contactNo?: SortOrder
    photo?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isBlocked?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumERoleWithAggregatesFilter<"User"> | $Enums.ERole
    password?: StringWithAggregatesFilter<"User"> | string
    contactNo?: StringWithAggregatesFilter<"User"> | string
    photo?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isBlocked?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type AIPromptConfigCreateInput = {
    id?: string
    name: string
    promptType: string
    promptText: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIPromptConfigUncheckedCreateInput = {
    id?: string
    name: string
    promptType: string
    promptText: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIPromptConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    promptType?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIPromptConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    promptType?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIPromptConfigCreateManyInput = {
    id?: string
    name: string
    promptType: string
    promptText: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIPromptConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    promptType?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIPromptConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    promptType?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateInput = {
    id?: string
    name: string
    description?: string | null
    firstMessage?: string | null
    apifyDatasetId?: string | null
    status?: $Enums.ECampaignStatus
    platform?: $Enums.EPlatform
    location?: string | null
    industry?: string | null
    followerThreshold?: number
    specification?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    targetIndustry?: IndustryCreateNestedOneWithoutCampaignsInput
    targetLocation?: LocationCreateNestedOneWithoutCampaignsInput
    createdBy: UserCreateNestedOneWithoutCampaignsInput
    leads?: LeadCreateNestedManyWithoutCampaignInput
    outreachMessages?: OutreachMessageCreateNestedManyWithoutCampaignInput
    scrapingJobs?: ScrapingJobCreateNestedManyWithoutCampaignInput
    meetings?: MeetingCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    firstMessage?: string | null
    apifyDatasetId?: string | null
    status?: $Enums.ECampaignStatus
    platform?: $Enums.EPlatform
    location?: string | null
    industry?: string | null
    followerThreshold?: number
    specification?: string | null
    targetIndustryId?: string | null
    targetLocationId?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutCampaignInput
    outreachMessages?: OutreachMessageUncheckedCreateNestedManyWithoutCampaignInput
    scrapingJobs?: ScrapingJobUncheckedCreateNestedManyWithoutCampaignInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessage?: NullableStringFieldUpdateOperationsInput | string | null
    apifyDatasetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumECampaignStatusFieldUpdateOperationsInput | $Enums.ECampaignStatus
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    location?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    followerThreshold?: IntFieldUpdateOperationsInput | number
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetIndustry?: IndustryUpdateOneWithoutCampaignsNestedInput
    targetLocation?: LocationUpdateOneWithoutCampaignsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    leads?: LeadUpdateManyWithoutCampaignNestedInput
    outreachMessages?: OutreachMessageUpdateManyWithoutCampaignNestedInput
    scrapingJobs?: ScrapingJobUpdateManyWithoutCampaignNestedInput
    meetings?: MeetingUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessage?: NullableStringFieldUpdateOperationsInput | string | null
    apifyDatasetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumECampaignStatusFieldUpdateOperationsInput | $Enums.ECampaignStatus
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    location?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    followerThreshold?: IntFieldUpdateOperationsInput | number
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    targetIndustryId?: NullableStringFieldUpdateOperationsInput | string | null
    targetLocationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutCampaignNestedInput
    outreachMessages?: OutreachMessageUncheckedUpdateManyWithoutCampaignNestedInput
    scrapingJobs?: ScrapingJobUncheckedUpdateManyWithoutCampaignNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    firstMessage?: string | null
    apifyDatasetId?: string | null
    status?: $Enums.ECampaignStatus
    platform?: $Enums.EPlatform
    location?: string | null
    industry?: string | null
    followerThreshold?: number
    specification?: string | null
    targetIndustryId?: string | null
    targetLocationId?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessage?: NullableStringFieldUpdateOperationsInput | string | null
    apifyDatasetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumECampaignStatusFieldUpdateOperationsInput | $Enums.ECampaignStatus
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    location?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    followerThreshold?: IntFieldUpdateOperationsInput | number
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessage?: NullableStringFieldUpdateOperationsInput | string | null
    apifyDatasetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumECampaignStatusFieldUpdateOperationsInput | $Enums.ECampaignStatus
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    location?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    followerThreshold?: IntFieldUpdateOperationsInput | number
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    targetIndustryId?: NullableStringFieldUpdateOperationsInput | string | null
    targetLocationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigCreateInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfigUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigCreateManyInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocsLinkCreateInput = {
    id?: string
    name: string
    projectName: string
    docsLink: string
    prompt?: string | null
    postGenerate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutDocsLinksInput
    posts?: MediaPostCreateNestedManyWithoutDocsLinkInput
  }

  export type DocsLinkUncheckedCreateInput = {
    id?: string
    name: string
    projectName: string
    docsLink: string
    prompt?: string | null
    postGenerate?: number
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: MediaPostUncheckedCreateNestedManyWithoutDocsLinkInput
  }

  export type DocsLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    docsLink?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    postGenerate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutDocsLinksNestedInput
    posts?: MediaPostUpdateManyWithoutDocsLinkNestedInput
  }

  export type DocsLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    docsLink?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    postGenerate?: IntFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: MediaPostUncheckedUpdateManyWithoutDocsLinkNestedInput
  }

  export type DocsLinkCreateManyInput = {
    id?: string
    name: string
    projectName: string
    docsLink: string
    prompt?: string | null
    postGenerate?: number
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocsLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    docsLink?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    postGenerate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocsLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    docsLink?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    postGenerate?: IntFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndustryCreateInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadCreateNestedManyWithoutIndustryInput
    campaigns?: CampaignCreateNestedManyWithoutTargetIndustryInput
  }

  export type IndustryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutIndustryInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTargetIndustryInput
  }

  export type IndustryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutIndustryNestedInput
    campaigns?: CampaignUpdateManyWithoutTargetIndustryNestedInput
  }

  export type IndustryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutIndustryNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTargetIndustryNestedInput
  }

  export type IndustryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IndustryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IndustryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    platform: $Enums.EPlatform
    platformUrl?: string | null
    profileUsername?: string | null
    followerCount?: number
    bio?: string | null
    imageUrl?: string | null
    website?: string | null
    totalScore?: number | null
    role?: string | null
    status?: $Enums.ELeadStatus
    gmailThreadId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industry?: IndustryCreateNestedOneWithoutLeadsInput
    location?: LocationCreateNestedOneWithoutLeadsInput
    campaign?: CampaignCreateNestedOneWithoutLeadsInput
    scrapingJob?: ScrapingJobCreateNestedOneWithoutLeadsInput
    outreachMessages?: OutreachMessageCreateNestedManyWithoutLeadInput
    meetings?: MeetingCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    platform: $Enums.EPlatform
    platformUrl?: string | null
    profileUsername?: string | null
    followerCount?: number
    bio?: string | null
    imageUrl?: string | null
    website?: string | null
    totalScore?: number | null
    role?: string | null
    status?: $Enums.ELeadStatus
    industryId?: string | null
    locationId?: string | null
    campaignId?: string | null
    scrapingJobId?: string | null
    gmailThreadId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    outreachMessages?: OutreachMessageUncheckedCreateNestedManyWithoutLeadInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUsername?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumELeadStatusFieldUpdateOperationsInput | $Enums.ELeadStatus
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industry?: IndustryUpdateOneWithoutLeadsNestedInput
    location?: LocationUpdateOneWithoutLeadsNestedInput
    campaign?: CampaignUpdateOneWithoutLeadsNestedInput
    scrapingJob?: ScrapingJobUpdateOneWithoutLeadsNestedInput
    outreachMessages?: OutreachMessageUpdateManyWithoutLeadNestedInput
    meetings?: MeetingUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUsername?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumELeadStatusFieldUpdateOperationsInput | $Enums.ELeadStatus
    industryId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    scrapingJobId?: NullableStringFieldUpdateOperationsInput | string | null
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outreachMessages?: OutreachMessageUncheckedUpdateManyWithoutLeadNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    platform: $Enums.EPlatform
    platformUrl?: string | null
    profileUsername?: string | null
    followerCount?: number
    bio?: string | null
    imageUrl?: string | null
    website?: string | null
    totalScore?: number | null
    role?: string | null
    status?: $Enums.ELeadStatus
    industryId?: string | null
    locationId?: string | null
    campaignId?: string | null
    scrapingJobId?: string | null
    gmailThreadId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUsername?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumELeadStatusFieldUpdateOperationsInput | $Enums.ELeadStatus
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUsername?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumELeadStatusFieldUpdateOperationsInput | $Enums.ELeadStatus
    industryId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    scrapingJobId?: NullableStringFieldUpdateOperationsInput | string | null
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateInput = {
    id?: string
    city: string
    state?: string | null
    country?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadCreateNestedManyWithoutLocationInput
    campaigns?: CampaignCreateNestedManyWithoutTargetLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    city: string
    state?: string | null
    country?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutLocationInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTargetLocationInput
  }

  export type LocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutLocationNestedInput
    campaigns?: CampaignUpdateManyWithoutTargetLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutLocationNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTargetLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: string
    city: string
    state?: string | null
    country?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaPostCreateInput = {
    id?: string
    heading: string
    body: string
    postTime?: Date | string
    status?: $Enums.EMediaPostStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    docsLink: DocsLinkCreateNestedOneWithoutPostsInput
  }

  export type MediaPostUncheckedCreateInput = {
    id?: string
    heading: string
    body: string
    postTime?: Date | string
    status?: $Enums.EMediaPostStatus
    docsLinkId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    postTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEMediaPostStatusFieldUpdateOperationsInput | $Enums.EMediaPostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    docsLink?: DocsLinkUpdateOneRequiredWithoutPostsNestedInput
  }

  export type MediaPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    postTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEMediaPostStatusFieldUpdateOperationsInput | $Enums.EMediaPostStatus
    docsLinkId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaPostCreateManyInput = {
    id?: string
    heading: string
    body: string
    postTime?: Date | string
    status?: $Enums.EMediaPostStatus
    docsLinkId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    postTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEMediaPostStatusFieldUpdateOperationsInput | $Enums.EMediaPostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    postTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEMediaPostStatusFieldUpdateOperationsInput | $Enums.EMediaPostStatus
    docsLinkId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingCreateInput = {
    id?: string
    title: string
    startTime: Date | string
    endTime: Date | string
    meetingLink?: string | null
    status?: $Enums.EMeetingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lead: LeadCreateNestedOneWithoutMeetingsInput
    campaign?: CampaignCreateNestedOneWithoutMeetingsInput
  }

  export type MeetingUncheckedCreateInput = {
    id?: string
    title: string
    leadId: string
    campaignId?: string | null
    startTime: Date | string
    endTime: Date | string
    meetingLink?: string | null
    status?: $Enums.EMeetingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEMeetingStatusFieldUpdateOperationsInput | $Enums.EMeetingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: LeadUpdateOneRequiredWithoutMeetingsNestedInput
    campaign?: CampaignUpdateOneWithoutMeetingsNestedInput
  }

  export type MeetingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEMeetingStatusFieldUpdateOperationsInput | $Enums.EMeetingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingCreateManyInput = {
    id?: string
    title: string
    leadId: string
    campaignId?: string | null
    startTime: Date | string
    endTime: Date | string
    meetingLink?: string | null
    status?: $Enums.EMeetingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEMeetingStatusFieldUpdateOperationsInput | $Enums.EMeetingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEMeetingStatusFieldUpdateOperationsInput | $Enums.EMeetingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutreachMessageCreateInput = {
    id?: string
    type: $Enums.EOutreachType
    senderType?: $Enums.EMessageSender
    subject?: string | null
    body: string
    sentAt?: Date | string | null
    replyStatus?: $Enums.EReplyStatus
    replyContent?: string | null
    isFollowUp?: boolean
    followUpCount?: number
    gmailThreadId?: string | null
    createdAt?: Date | string
    lead: LeadCreateNestedOneWithoutOutreachMessagesInput
    campaign: CampaignCreateNestedOneWithoutOutreachMessagesInput
  }

  export type OutreachMessageUncheckedCreateInput = {
    id?: string
    leadId: string
    campaignId: string
    type: $Enums.EOutreachType
    senderType?: $Enums.EMessageSender
    subject?: string | null
    body: string
    sentAt?: Date | string | null
    replyStatus?: $Enums.EReplyStatus
    replyContent?: string | null
    isFollowUp?: boolean
    followUpCount?: number
    gmailThreadId?: string | null
    createdAt?: Date | string
  }

  export type OutreachMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEOutreachTypeFieldUpdateOperationsInput | $Enums.EOutreachType
    senderType?: EnumEMessageSenderFieldUpdateOperationsInput | $Enums.EMessageSender
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyStatus?: EnumEReplyStatusFieldUpdateOperationsInput | $Enums.EReplyStatus
    replyContent?: NullableStringFieldUpdateOperationsInput | string | null
    isFollowUp?: BoolFieldUpdateOperationsInput | boolean
    followUpCount?: IntFieldUpdateOperationsInput | number
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: LeadUpdateOneRequiredWithoutOutreachMessagesNestedInput
    campaign?: CampaignUpdateOneRequiredWithoutOutreachMessagesNestedInput
  }

  export type OutreachMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    type?: EnumEOutreachTypeFieldUpdateOperationsInput | $Enums.EOutreachType
    senderType?: EnumEMessageSenderFieldUpdateOperationsInput | $Enums.EMessageSender
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyStatus?: EnumEReplyStatusFieldUpdateOperationsInput | $Enums.EReplyStatus
    replyContent?: NullableStringFieldUpdateOperationsInput | string | null
    isFollowUp?: BoolFieldUpdateOperationsInput | boolean
    followUpCount?: IntFieldUpdateOperationsInput | number
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutreachMessageCreateManyInput = {
    id?: string
    leadId: string
    campaignId: string
    type: $Enums.EOutreachType
    senderType?: $Enums.EMessageSender
    subject?: string | null
    body: string
    sentAt?: Date | string | null
    replyStatus?: $Enums.EReplyStatus
    replyContent?: string | null
    isFollowUp?: boolean
    followUpCount?: number
    gmailThreadId?: string | null
    createdAt?: Date | string
  }

  export type OutreachMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEOutreachTypeFieldUpdateOperationsInput | $Enums.EOutreachType
    senderType?: EnumEMessageSenderFieldUpdateOperationsInput | $Enums.EMessageSender
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyStatus?: EnumEReplyStatusFieldUpdateOperationsInput | $Enums.EReplyStatus
    replyContent?: NullableStringFieldUpdateOperationsInput | string | null
    isFollowUp?: BoolFieldUpdateOperationsInput | boolean
    followUpCount?: IntFieldUpdateOperationsInput | number
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutreachMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    type?: EnumEOutreachTypeFieldUpdateOperationsInput | $Enums.EOutreachType
    senderType?: EnumEMessageSenderFieldUpdateOperationsInput | $Enums.EMessageSender
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyStatus?: EnumEReplyStatusFieldUpdateOperationsInput | $Enums.EReplyStatus
    replyContent?: NullableStringFieldUpdateOperationsInput | string | null
    isFollowUp?: BoolFieldUpdateOperationsInput | boolean
    followUpCount?: IntFieldUpdateOperationsInput | number
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapingJobCreateInput = {
    id?: string
    platform: $Enums.EPlatform
    status?: $Enums.EScrapingJobStatus
    targetQuery?: string | null
    leadsFound?: number
    leadsExtracted?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorLog?: string | null
    createdAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutScrapingJobsInput
    leads?: LeadCreateNestedManyWithoutScrapingJobInput
  }

  export type ScrapingJobUncheckedCreateInput = {
    id?: string
    campaignId: string
    platform: $Enums.EPlatform
    status?: $Enums.EScrapingJobStatus
    targetQuery?: string | null
    leadsFound?: number
    leadsExtracted?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorLog?: string | null
    createdAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutScrapingJobInput
  }

  export type ScrapingJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    status?: EnumEScrapingJobStatusFieldUpdateOperationsInput | $Enums.EScrapingJobStatus
    targetQuery?: NullableStringFieldUpdateOperationsInput | string | null
    leadsFound?: IntFieldUpdateOperationsInput | number
    leadsExtracted?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorLog?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutScrapingJobsNestedInput
    leads?: LeadUpdateManyWithoutScrapingJobNestedInput
  }

  export type ScrapingJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    status?: EnumEScrapingJobStatusFieldUpdateOperationsInput | $Enums.EScrapingJobStatus
    targetQuery?: NullableStringFieldUpdateOperationsInput | string | null
    leadsFound?: IntFieldUpdateOperationsInput | number
    leadsExtracted?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorLog?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutScrapingJobNestedInput
  }

  export type ScrapingJobCreateManyInput = {
    id?: string
    campaignId: string
    platform: $Enums.EPlatform
    status?: $Enums.EScrapingJobStatus
    targetQuery?: string | null
    leadsFound?: number
    leadsExtracted?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorLog?: string | null
    createdAt?: Date | string
  }

  export type ScrapingJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    status?: EnumEScrapingJobStatusFieldUpdateOperationsInput | $Enums.EScrapingJobStatus
    targetQuery?: NullableStringFieldUpdateOperationsInput | string | null
    leadsFound?: IntFieldUpdateOperationsInput | number
    leadsExtracted?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorLog?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapingJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    status?: EnumEScrapingJobStatusFieldUpdateOperationsInput | $Enums.EScrapingJobStatus
    targetQuery?: NullableStringFieldUpdateOperationsInput | string | null
    leadsFound?: IntFieldUpdateOperationsInput | number
    leadsExtracted?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorLog?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.ERole
    password: string
    contactNo: string
    photo?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isBlocked?: boolean
    campaigns?: CampaignCreateNestedManyWithoutCreatedByInput
    docsLinks?: DocsLinkCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.ERole
    password: string
    contactNo: string
    photo?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isBlocked?: boolean
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCreatedByInput
    docsLinks?: DocsLinkUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumERoleFieldUpdateOperationsInput | $Enums.ERole
    password?: StringFieldUpdateOperationsInput | string
    contactNo?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    campaigns?: CampaignUpdateManyWithoutCreatedByNestedInput
    docsLinks?: DocsLinkUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumERoleFieldUpdateOperationsInput | $Enums.ERole
    password?: StringFieldUpdateOperationsInput | string
    contactNo?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    campaigns?: CampaignUncheckedUpdateManyWithoutCreatedByNestedInput
    docsLinks?: DocsLinkUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.ERole
    password: string
    contactNo: string
    photo?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isBlocked?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumERoleFieldUpdateOperationsInput | $Enums.ERole
    password?: StringFieldUpdateOperationsInput | string
    contactNo?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumERoleFieldUpdateOperationsInput | $Enums.ERole
    password?: StringFieldUpdateOperationsInput | string
    contactNo?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AIPromptConfigCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    promptType?: SortOrder
    promptText?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIPromptConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    promptType?: SortOrder
    promptText?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIPromptConfigMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    promptType?: SortOrder
    promptText?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumECampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ECampaignStatus | EnumECampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ECampaignStatus[] | ListEnumECampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ECampaignStatus[] | ListEnumECampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumECampaignStatusFilter<$PrismaModel> | $Enums.ECampaignStatus
  }

  export type EnumEPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.EPlatform | EnumEPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.EPlatform[] | ListEnumEPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.EPlatform[] | ListEnumEPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumEPlatformFilter<$PrismaModel> | $Enums.EPlatform
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IndustryNullableScalarRelationFilter = {
    is?: IndustryWhereInput | null
    isNot?: IndustryWhereInput | null
  }

  export type LocationNullableScalarRelationFilter = {
    is?: LocationWhereInput | null
    isNot?: LocationWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LeadListRelationFilter = {
    every?: LeadWhereInput
    some?: LeadWhereInput
    none?: LeadWhereInput
  }

  export type OutreachMessageListRelationFilter = {
    every?: OutreachMessageWhereInput
    some?: OutreachMessageWhereInput
    none?: OutreachMessageWhereInput
  }

  export type ScrapingJobListRelationFilter = {
    every?: ScrapingJobWhereInput
    some?: ScrapingJobWhereInput
    none?: ScrapingJobWhereInput
  }

  export type MeetingListRelationFilter = {
    every?: MeetingWhereInput
    some?: MeetingWhereInput
    none?: MeetingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LeadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutreachMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScrapingJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeetingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    firstMessage?: SortOrder
    apifyDatasetId?: SortOrder
    status?: SortOrder
    platform?: SortOrder
    location?: SortOrder
    industry?: SortOrder
    followerThreshold?: SortOrder
    specification?: SortOrder
    targetIndustryId?: SortOrder
    targetLocationId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    followerThreshold?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    firstMessage?: SortOrder
    apifyDatasetId?: SortOrder
    status?: SortOrder
    platform?: SortOrder
    location?: SortOrder
    industry?: SortOrder
    followerThreshold?: SortOrder
    specification?: SortOrder
    targetIndustryId?: SortOrder
    targetLocationId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    firstMessage?: SortOrder
    apifyDatasetId?: SortOrder
    status?: SortOrder
    platform?: SortOrder
    location?: SortOrder
    industry?: SortOrder
    followerThreshold?: SortOrder
    specification?: SortOrder
    targetIndustryId?: SortOrder
    targetLocationId?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    followerThreshold?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumECampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ECampaignStatus | EnumECampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ECampaignStatus[] | ListEnumECampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ECampaignStatus[] | ListEnumECampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumECampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.ECampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumECampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumECampaignStatusFilter<$PrismaModel>
  }

  export type EnumEPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EPlatform | EnumEPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.EPlatform[] | ListEnumEPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.EPlatform[] | ListEnumEPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumEPlatformWithAggregatesFilter<$PrismaModel> | $Enums.EPlatform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEPlatformFilter<$PrismaModel>
    _max?: NestedEnumEPlatformFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ConfigCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConfigMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaPostListRelationFilter = {
    every?: MediaPostWhereInput
    some?: MediaPostWhereInput
    none?: MediaPostWhereInput
  }

  export type MediaPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocsLinkCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectName?: SortOrder
    docsLink?: SortOrder
    prompt?: SortOrder
    postGenerate?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocsLinkAvgOrderByAggregateInput = {
    postGenerate?: SortOrder
  }

  export type DocsLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectName?: SortOrder
    docsLink?: SortOrder
    prompt?: SortOrder
    postGenerate?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocsLinkMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    projectName?: SortOrder
    docsLink?: SortOrder
    prompt?: SortOrder
    postGenerate?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocsLinkSumOrderByAggregateInput = {
    postGenerate?: SortOrder
  }

  export type CampaignListRelationFilter = {
    every?: CampaignWhereInput
    some?: CampaignWhereInput
    none?: CampaignWhereInput
  }

  export type CampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IndustryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IndustryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IndustryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumELeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ELeadStatus | EnumELeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ELeadStatus[] | ListEnumELeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ELeadStatus[] | ListEnumELeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumELeadStatusFilter<$PrismaModel> | $Enums.ELeadStatus
  }

  export type CampaignNullableScalarRelationFilter = {
    is?: CampaignWhereInput | null
    isNot?: CampaignWhereInput | null
  }

  export type ScrapingJobNullableScalarRelationFilter = {
    is?: ScrapingJobWhereInput | null
    isNot?: ScrapingJobWhereInput | null
  }

  export type LeadCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    platform?: SortOrder
    platformUrl?: SortOrder
    profileUsername?: SortOrder
    followerCount?: SortOrder
    bio?: SortOrder
    imageUrl?: SortOrder
    website?: SortOrder
    totalScore?: SortOrder
    role?: SortOrder
    status?: SortOrder
    industryId?: SortOrder
    locationId?: SortOrder
    campaignId?: SortOrder
    scrapingJobId?: SortOrder
    gmailThreadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadAvgOrderByAggregateInput = {
    followerCount?: SortOrder
    totalScore?: SortOrder
  }

  export type LeadMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    platform?: SortOrder
    platformUrl?: SortOrder
    profileUsername?: SortOrder
    followerCount?: SortOrder
    bio?: SortOrder
    imageUrl?: SortOrder
    website?: SortOrder
    totalScore?: SortOrder
    role?: SortOrder
    status?: SortOrder
    industryId?: SortOrder
    locationId?: SortOrder
    campaignId?: SortOrder
    scrapingJobId?: SortOrder
    gmailThreadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    platform?: SortOrder
    platformUrl?: SortOrder
    profileUsername?: SortOrder
    followerCount?: SortOrder
    bio?: SortOrder
    imageUrl?: SortOrder
    website?: SortOrder
    totalScore?: SortOrder
    role?: SortOrder
    status?: SortOrder
    industryId?: SortOrder
    locationId?: SortOrder
    campaignId?: SortOrder
    scrapingJobId?: SortOrder
    gmailThreadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadSumOrderByAggregateInput = {
    followerCount?: SortOrder
    totalScore?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumELeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ELeadStatus | EnumELeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ELeadStatus[] | ListEnumELeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ELeadStatus[] | ListEnumELeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumELeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.ELeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumELeadStatusFilter<$PrismaModel>
    _max?: NestedEnumELeadStatusFilter<$PrismaModel>
  }

  export type LocationCityStateCountryCompoundUniqueInput = {
    city: string
    state: string
    country: string
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEMediaPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EMediaPostStatus | EnumEMediaPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EMediaPostStatus[] | ListEnumEMediaPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EMediaPostStatus[] | ListEnumEMediaPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEMediaPostStatusFilter<$PrismaModel> | $Enums.EMediaPostStatus
  }

  export type DocsLinkScalarRelationFilter = {
    is?: DocsLinkWhereInput
    isNot?: DocsLinkWhereInput
  }

  export type MediaPostCountOrderByAggregateInput = {
    id?: SortOrder
    heading?: SortOrder
    body?: SortOrder
    postTime?: SortOrder
    status?: SortOrder
    docsLinkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaPostMaxOrderByAggregateInput = {
    id?: SortOrder
    heading?: SortOrder
    body?: SortOrder
    postTime?: SortOrder
    status?: SortOrder
    docsLinkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaPostMinOrderByAggregateInput = {
    id?: SortOrder
    heading?: SortOrder
    body?: SortOrder
    postTime?: SortOrder
    status?: SortOrder
    docsLinkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEMediaPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EMediaPostStatus | EnumEMediaPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EMediaPostStatus[] | ListEnumEMediaPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EMediaPostStatus[] | ListEnumEMediaPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEMediaPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.EMediaPostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEMediaPostStatusFilter<$PrismaModel>
    _max?: NestedEnumEMediaPostStatusFilter<$PrismaModel>
  }

  export type EnumEMeetingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EMeetingStatus | EnumEMeetingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EMeetingStatus[] | ListEnumEMeetingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EMeetingStatus[] | ListEnumEMeetingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEMeetingStatusFilter<$PrismaModel> | $Enums.EMeetingStatus
  }

  export type LeadScalarRelationFilter = {
    is?: LeadWhereInput
    isNot?: LeadWhereInput
  }

  export type MeetingCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    leadId?: SortOrder
    campaignId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    meetingLink?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    leadId?: SortOrder
    campaignId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    meetingLink?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    leadId?: SortOrder
    campaignId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    meetingLink?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEMeetingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EMeetingStatus | EnumEMeetingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EMeetingStatus[] | ListEnumEMeetingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EMeetingStatus[] | ListEnumEMeetingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEMeetingStatusWithAggregatesFilter<$PrismaModel> | $Enums.EMeetingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEMeetingStatusFilter<$PrismaModel>
    _max?: NestedEnumEMeetingStatusFilter<$PrismaModel>
  }

  export type EnumEOutreachTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EOutreachType | EnumEOutreachTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EOutreachType[] | ListEnumEOutreachTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EOutreachType[] | ListEnumEOutreachTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEOutreachTypeFilter<$PrismaModel> | $Enums.EOutreachType
  }

  export type EnumEMessageSenderFilter<$PrismaModel = never> = {
    equals?: $Enums.EMessageSender | EnumEMessageSenderFieldRefInput<$PrismaModel>
    in?: $Enums.EMessageSender[] | ListEnumEMessageSenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.EMessageSender[] | ListEnumEMessageSenderFieldRefInput<$PrismaModel>
    not?: NestedEnumEMessageSenderFilter<$PrismaModel> | $Enums.EMessageSender
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumEReplyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EReplyStatus | EnumEReplyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EReplyStatus[] | ListEnumEReplyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EReplyStatus[] | ListEnumEReplyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEReplyStatusFilter<$PrismaModel> | $Enums.EReplyStatus
  }

  export type CampaignScalarRelationFilter = {
    is?: CampaignWhereInput
    isNot?: CampaignWhereInput
  }

  export type OutreachMessageCountOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    campaignId?: SortOrder
    type?: SortOrder
    senderType?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    sentAt?: SortOrder
    replyStatus?: SortOrder
    replyContent?: SortOrder
    isFollowUp?: SortOrder
    followUpCount?: SortOrder
    gmailThreadId?: SortOrder
    createdAt?: SortOrder
  }

  export type OutreachMessageAvgOrderByAggregateInput = {
    followUpCount?: SortOrder
  }

  export type OutreachMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    campaignId?: SortOrder
    type?: SortOrder
    senderType?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    sentAt?: SortOrder
    replyStatus?: SortOrder
    replyContent?: SortOrder
    isFollowUp?: SortOrder
    followUpCount?: SortOrder
    gmailThreadId?: SortOrder
    createdAt?: SortOrder
  }

  export type OutreachMessageMinOrderByAggregateInput = {
    id?: SortOrder
    leadId?: SortOrder
    campaignId?: SortOrder
    type?: SortOrder
    senderType?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    sentAt?: SortOrder
    replyStatus?: SortOrder
    replyContent?: SortOrder
    isFollowUp?: SortOrder
    followUpCount?: SortOrder
    gmailThreadId?: SortOrder
    createdAt?: SortOrder
  }

  export type OutreachMessageSumOrderByAggregateInput = {
    followUpCount?: SortOrder
  }

  export type EnumEOutreachTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EOutreachType | EnumEOutreachTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EOutreachType[] | ListEnumEOutreachTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EOutreachType[] | ListEnumEOutreachTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEOutreachTypeWithAggregatesFilter<$PrismaModel> | $Enums.EOutreachType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEOutreachTypeFilter<$PrismaModel>
    _max?: NestedEnumEOutreachTypeFilter<$PrismaModel>
  }

  export type EnumEMessageSenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EMessageSender | EnumEMessageSenderFieldRefInput<$PrismaModel>
    in?: $Enums.EMessageSender[] | ListEnumEMessageSenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.EMessageSender[] | ListEnumEMessageSenderFieldRefInput<$PrismaModel>
    not?: NestedEnumEMessageSenderWithAggregatesFilter<$PrismaModel> | $Enums.EMessageSender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEMessageSenderFilter<$PrismaModel>
    _max?: NestedEnumEMessageSenderFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumEReplyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EReplyStatus | EnumEReplyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EReplyStatus[] | ListEnumEReplyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EReplyStatus[] | ListEnumEReplyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEReplyStatusWithAggregatesFilter<$PrismaModel> | $Enums.EReplyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEReplyStatusFilter<$PrismaModel>
    _max?: NestedEnumEReplyStatusFilter<$PrismaModel>
  }

  export type EnumEScrapingJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EScrapingJobStatus | EnumEScrapingJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EScrapingJobStatus[] | ListEnumEScrapingJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EScrapingJobStatus[] | ListEnumEScrapingJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEScrapingJobStatusFilter<$PrismaModel> | $Enums.EScrapingJobStatus
  }

  export type ScrapingJobCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    platform?: SortOrder
    status?: SortOrder
    targetQuery?: SortOrder
    leadsFound?: SortOrder
    leadsExtracted?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    errorLog?: SortOrder
    createdAt?: SortOrder
  }

  export type ScrapingJobAvgOrderByAggregateInput = {
    leadsFound?: SortOrder
    leadsExtracted?: SortOrder
  }

  export type ScrapingJobMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    platform?: SortOrder
    status?: SortOrder
    targetQuery?: SortOrder
    leadsFound?: SortOrder
    leadsExtracted?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    errorLog?: SortOrder
    createdAt?: SortOrder
  }

  export type ScrapingJobMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    platform?: SortOrder
    status?: SortOrder
    targetQuery?: SortOrder
    leadsFound?: SortOrder
    leadsExtracted?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    errorLog?: SortOrder
    createdAt?: SortOrder
  }

  export type ScrapingJobSumOrderByAggregateInput = {
    leadsFound?: SortOrder
    leadsExtracted?: SortOrder
  }

  export type EnumEScrapingJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EScrapingJobStatus | EnumEScrapingJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EScrapingJobStatus[] | ListEnumEScrapingJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EScrapingJobStatus[] | ListEnumEScrapingJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEScrapingJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.EScrapingJobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEScrapingJobStatusFilter<$PrismaModel>
    _max?: NestedEnumEScrapingJobStatusFilter<$PrismaModel>
  }

  export type EnumERoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ERole | EnumERoleFieldRefInput<$PrismaModel>
    in?: $Enums.ERole[] | ListEnumERoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ERole[] | ListEnumERoleFieldRefInput<$PrismaModel>
    not?: NestedEnumERoleFilter<$PrismaModel> | $Enums.ERole
  }

  export type DocsLinkListRelationFilter = {
    every?: DocsLinkWhereInput
    some?: DocsLinkWhereInput
    none?: DocsLinkWhereInput
  }

  export type DocsLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    contactNo?: SortOrder
    photo?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isBlocked?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    contactNo?: SortOrder
    photo?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isBlocked?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    contactNo?: SortOrder
    photo?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isBlocked?: SortOrder
  }

  export type EnumERoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ERole | EnumERoleFieldRefInput<$PrismaModel>
    in?: $Enums.ERole[] | ListEnumERoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ERole[] | ListEnumERoleFieldRefInput<$PrismaModel>
    not?: NestedEnumERoleWithAggregatesFilter<$PrismaModel> | $Enums.ERole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumERoleFilter<$PrismaModel>
    _max?: NestedEnumERoleFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IndustryCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<IndustryCreateWithoutCampaignsInput, IndustryUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: IndustryCreateOrConnectWithoutCampaignsInput
    connect?: IndustryWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<LocationCreateWithoutCampaignsInput, LocationUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutCampaignsInput
    connect?: LocationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    connect?: UserWhereUniqueInput
  }

  export type LeadCreateNestedManyWithoutCampaignInput = {
    create?: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput> | LeadCreateWithoutCampaignInput[] | LeadUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCampaignInput | LeadCreateOrConnectWithoutCampaignInput[]
    createMany?: LeadCreateManyCampaignInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type OutreachMessageCreateNestedManyWithoutCampaignInput = {
    create?: XOR<OutreachMessageCreateWithoutCampaignInput, OutreachMessageUncheckedCreateWithoutCampaignInput> | OutreachMessageCreateWithoutCampaignInput[] | OutreachMessageUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: OutreachMessageCreateOrConnectWithoutCampaignInput | OutreachMessageCreateOrConnectWithoutCampaignInput[]
    createMany?: OutreachMessageCreateManyCampaignInputEnvelope
    connect?: OutreachMessageWhereUniqueInput | OutreachMessageWhereUniqueInput[]
  }

  export type ScrapingJobCreateNestedManyWithoutCampaignInput = {
    create?: XOR<ScrapingJobCreateWithoutCampaignInput, ScrapingJobUncheckedCreateWithoutCampaignInput> | ScrapingJobCreateWithoutCampaignInput[] | ScrapingJobUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ScrapingJobCreateOrConnectWithoutCampaignInput | ScrapingJobCreateOrConnectWithoutCampaignInput[]
    createMany?: ScrapingJobCreateManyCampaignInputEnvelope
    connect?: ScrapingJobWhereUniqueInput | ScrapingJobWhereUniqueInput[]
  }

  export type MeetingCreateNestedManyWithoutCampaignInput = {
    create?: XOR<MeetingCreateWithoutCampaignInput, MeetingUncheckedCreateWithoutCampaignInput> | MeetingCreateWithoutCampaignInput[] | MeetingUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutCampaignInput | MeetingCreateOrConnectWithoutCampaignInput[]
    createMany?: MeetingCreateManyCampaignInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput> | LeadCreateWithoutCampaignInput[] | LeadUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCampaignInput | LeadCreateOrConnectWithoutCampaignInput[]
    createMany?: LeadCreateManyCampaignInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type OutreachMessageUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<OutreachMessageCreateWithoutCampaignInput, OutreachMessageUncheckedCreateWithoutCampaignInput> | OutreachMessageCreateWithoutCampaignInput[] | OutreachMessageUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: OutreachMessageCreateOrConnectWithoutCampaignInput | OutreachMessageCreateOrConnectWithoutCampaignInput[]
    createMany?: OutreachMessageCreateManyCampaignInputEnvelope
    connect?: OutreachMessageWhereUniqueInput | OutreachMessageWhereUniqueInput[]
  }

  export type ScrapingJobUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<ScrapingJobCreateWithoutCampaignInput, ScrapingJobUncheckedCreateWithoutCampaignInput> | ScrapingJobCreateWithoutCampaignInput[] | ScrapingJobUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ScrapingJobCreateOrConnectWithoutCampaignInput | ScrapingJobCreateOrConnectWithoutCampaignInput[]
    createMany?: ScrapingJobCreateManyCampaignInputEnvelope
    connect?: ScrapingJobWhereUniqueInput | ScrapingJobWhereUniqueInput[]
  }

  export type MeetingUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<MeetingCreateWithoutCampaignInput, MeetingUncheckedCreateWithoutCampaignInput> | MeetingCreateWithoutCampaignInput[] | MeetingUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutCampaignInput | MeetingCreateOrConnectWithoutCampaignInput[]
    createMany?: MeetingCreateManyCampaignInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumECampaignStatusFieldUpdateOperationsInput = {
    set?: $Enums.ECampaignStatus
  }

  export type EnumEPlatformFieldUpdateOperationsInput = {
    set?: $Enums.EPlatform
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IndustryUpdateOneWithoutCampaignsNestedInput = {
    create?: XOR<IndustryCreateWithoutCampaignsInput, IndustryUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: IndustryCreateOrConnectWithoutCampaignsInput
    upsert?: IndustryUpsertWithoutCampaignsInput
    disconnect?: IndustryWhereInput | boolean
    delete?: IndustryWhereInput | boolean
    connect?: IndustryWhereUniqueInput
    update?: XOR<XOR<IndustryUpdateToOneWithWhereWithoutCampaignsInput, IndustryUpdateWithoutCampaignsInput>, IndustryUncheckedUpdateWithoutCampaignsInput>
  }

  export type LocationUpdateOneWithoutCampaignsNestedInput = {
    create?: XOR<LocationCreateWithoutCampaignsInput, LocationUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutCampaignsInput
    upsert?: LocationUpsertWithoutCampaignsInput
    disconnect?: LocationWhereInput | boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutCampaignsInput, LocationUpdateWithoutCampaignsInput>, LocationUncheckedUpdateWithoutCampaignsInput>
  }

  export type UserUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCampaignsInput
    upsert?: UserUpsertWithoutCampaignsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCampaignsInput, UserUpdateWithoutCampaignsInput>, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type LeadUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput> | LeadCreateWithoutCampaignInput[] | LeadUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCampaignInput | LeadCreateOrConnectWithoutCampaignInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutCampaignInput | LeadUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: LeadCreateManyCampaignInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutCampaignInput | LeadUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutCampaignInput | LeadUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type OutreachMessageUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<OutreachMessageCreateWithoutCampaignInput, OutreachMessageUncheckedCreateWithoutCampaignInput> | OutreachMessageCreateWithoutCampaignInput[] | OutreachMessageUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: OutreachMessageCreateOrConnectWithoutCampaignInput | OutreachMessageCreateOrConnectWithoutCampaignInput[]
    upsert?: OutreachMessageUpsertWithWhereUniqueWithoutCampaignInput | OutreachMessageUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: OutreachMessageCreateManyCampaignInputEnvelope
    set?: OutreachMessageWhereUniqueInput | OutreachMessageWhereUniqueInput[]
    disconnect?: OutreachMessageWhereUniqueInput | OutreachMessageWhereUniqueInput[]
    delete?: OutreachMessageWhereUniqueInput | OutreachMessageWhereUniqueInput[]
    connect?: OutreachMessageWhereUniqueInput | OutreachMessageWhereUniqueInput[]
    update?: OutreachMessageUpdateWithWhereUniqueWithoutCampaignInput | OutreachMessageUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: OutreachMessageUpdateManyWithWhereWithoutCampaignInput | OutreachMessageUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: OutreachMessageScalarWhereInput | OutreachMessageScalarWhereInput[]
  }

  export type ScrapingJobUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<ScrapingJobCreateWithoutCampaignInput, ScrapingJobUncheckedCreateWithoutCampaignInput> | ScrapingJobCreateWithoutCampaignInput[] | ScrapingJobUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ScrapingJobCreateOrConnectWithoutCampaignInput | ScrapingJobCreateOrConnectWithoutCampaignInput[]
    upsert?: ScrapingJobUpsertWithWhereUniqueWithoutCampaignInput | ScrapingJobUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: ScrapingJobCreateManyCampaignInputEnvelope
    set?: ScrapingJobWhereUniqueInput | ScrapingJobWhereUniqueInput[]
    disconnect?: ScrapingJobWhereUniqueInput | ScrapingJobWhereUniqueInput[]
    delete?: ScrapingJobWhereUniqueInput | ScrapingJobWhereUniqueInput[]
    connect?: ScrapingJobWhereUniqueInput | ScrapingJobWhereUniqueInput[]
    update?: ScrapingJobUpdateWithWhereUniqueWithoutCampaignInput | ScrapingJobUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: ScrapingJobUpdateManyWithWhereWithoutCampaignInput | ScrapingJobUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: ScrapingJobScalarWhereInput | ScrapingJobScalarWhereInput[]
  }

  export type MeetingUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<MeetingCreateWithoutCampaignInput, MeetingUncheckedCreateWithoutCampaignInput> | MeetingCreateWithoutCampaignInput[] | MeetingUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutCampaignInput | MeetingCreateOrConnectWithoutCampaignInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutCampaignInput | MeetingUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: MeetingCreateManyCampaignInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutCampaignInput | MeetingUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutCampaignInput | MeetingUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput> | LeadCreateWithoutCampaignInput[] | LeadUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutCampaignInput | LeadCreateOrConnectWithoutCampaignInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutCampaignInput | LeadUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: LeadCreateManyCampaignInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutCampaignInput | LeadUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutCampaignInput | LeadUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type OutreachMessageUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<OutreachMessageCreateWithoutCampaignInput, OutreachMessageUncheckedCreateWithoutCampaignInput> | OutreachMessageCreateWithoutCampaignInput[] | OutreachMessageUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: OutreachMessageCreateOrConnectWithoutCampaignInput | OutreachMessageCreateOrConnectWithoutCampaignInput[]
    upsert?: OutreachMessageUpsertWithWhereUniqueWithoutCampaignInput | OutreachMessageUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: OutreachMessageCreateManyCampaignInputEnvelope
    set?: OutreachMessageWhereUniqueInput | OutreachMessageWhereUniqueInput[]
    disconnect?: OutreachMessageWhereUniqueInput | OutreachMessageWhereUniqueInput[]
    delete?: OutreachMessageWhereUniqueInput | OutreachMessageWhereUniqueInput[]
    connect?: OutreachMessageWhereUniqueInput | OutreachMessageWhereUniqueInput[]
    update?: OutreachMessageUpdateWithWhereUniqueWithoutCampaignInput | OutreachMessageUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: OutreachMessageUpdateManyWithWhereWithoutCampaignInput | OutreachMessageUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: OutreachMessageScalarWhereInput | OutreachMessageScalarWhereInput[]
  }

  export type ScrapingJobUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<ScrapingJobCreateWithoutCampaignInput, ScrapingJobUncheckedCreateWithoutCampaignInput> | ScrapingJobCreateWithoutCampaignInput[] | ScrapingJobUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: ScrapingJobCreateOrConnectWithoutCampaignInput | ScrapingJobCreateOrConnectWithoutCampaignInput[]
    upsert?: ScrapingJobUpsertWithWhereUniqueWithoutCampaignInput | ScrapingJobUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: ScrapingJobCreateManyCampaignInputEnvelope
    set?: ScrapingJobWhereUniqueInput | ScrapingJobWhereUniqueInput[]
    disconnect?: ScrapingJobWhereUniqueInput | ScrapingJobWhereUniqueInput[]
    delete?: ScrapingJobWhereUniqueInput | ScrapingJobWhereUniqueInput[]
    connect?: ScrapingJobWhereUniqueInput | ScrapingJobWhereUniqueInput[]
    update?: ScrapingJobUpdateWithWhereUniqueWithoutCampaignInput | ScrapingJobUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: ScrapingJobUpdateManyWithWhereWithoutCampaignInput | ScrapingJobUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: ScrapingJobScalarWhereInput | ScrapingJobScalarWhereInput[]
  }

  export type MeetingUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<MeetingCreateWithoutCampaignInput, MeetingUncheckedCreateWithoutCampaignInput> | MeetingCreateWithoutCampaignInput[] | MeetingUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutCampaignInput | MeetingCreateOrConnectWithoutCampaignInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutCampaignInput | MeetingUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: MeetingCreateManyCampaignInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutCampaignInput | MeetingUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutCampaignInput | MeetingUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDocsLinksInput = {
    create?: XOR<UserCreateWithoutDocsLinksInput, UserUncheckedCreateWithoutDocsLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocsLinksInput
    connect?: UserWhereUniqueInput
  }

  export type MediaPostCreateNestedManyWithoutDocsLinkInput = {
    create?: XOR<MediaPostCreateWithoutDocsLinkInput, MediaPostUncheckedCreateWithoutDocsLinkInput> | MediaPostCreateWithoutDocsLinkInput[] | MediaPostUncheckedCreateWithoutDocsLinkInput[]
    connectOrCreate?: MediaPostCreateOrConnectWithoutDocsLinkInput | MediaPostCreateOrConnectWithoutDocsLinkInput[]
    createMany?: MediaPostCreateManyDocsLinkInputEnvelope
    connect?: MediaPostWhereUniqueInput | MediaPostWhereUniqueInput[]
  }

  export type MediaPostUncheckedCreateNestedManyWithoutDocsLinkInput = {
    create?: XOR<MediaPostCreateWithoutDocsLinkInput, MediaPostUncheckedCreateWithoutDocsLinkInput> | MediaPostCreateWithoutDocsLinkInput[] | MediaPostUncheckedCreateWithoutDocsLinkInput[]
    connectOrCreate?: MediaPostCreateOrConnectWithoutDocsLinkInput | MediaPostCreateOrConnectWithoutDocsLinkInput[]
    createMany?: MediaPostCreateManyDocsLinkInputEnvelope
    connect?: MediaPostWhereUniqueInput | MediaPostWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDocsLinksNestedInput = {
    create?: XOR<UserCreateWithoutDocsLinksInput, UserUncheckedCreateWithoutDocsLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocsLinksInput
    upsert?: UserUpsertWithoutDocsLinksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDocsLinksInput, UserUpdateWithoutDocsLinksInput>, UserUncheckedUpdateWithoutDocsLinksInput>
  }

  export type MediaPostUpdateManyWithoutDocsLinkNestedInput = {
    create?: XOR<MediaPostCreateWithoutDocsLinkInput, MediaPostUncheckedCreateWithoutDocsLinkInput> | MediaPostCreateWithoutDocsLinkInput[] | MediaPostUncheckedCreateWithoutDocsLinkInput[]
    connectOrCreate?: MediaPostCreateOrConnectWithoutDocsLinkInput | MediaPostCreateOrConnectWithoutDocsLinkInput[]
    upsert?: MediaPostUpsertWithWhereUniqueWithoutDocsLinkInput | MediaPostUpsertWithWhereUniqueWithoutDocsLinkInput[]
    createMany?: MediaPostCreateManyDocsLinkInputEnvelope
    set?: MediaPostWhereUniqueInput | MediaPostWhereUniqueInput[]
    disconnect?: MediaPostWhereUniqueInput | MediaPostWhereUniqueInput[]
    delete?: MediaPostWhereUniqueInput | MediaPostWhereUniqueInput[]
    connect?: MediaPostWhereUniqueInput | MediaPostWhereUniqueInput[]
    update?: MediaPostUpdateWithWhereUniqueWithoutDocsLinkInput | MediaPostUpdateWithWhereUniqueWithoutDocsLinkInput[]
    updateMany?: MediaPostUpdateManyWithWhereWithoutDocsLinkInput | MediaPostUpdateManyWithWhereWithoutDocsLinkInput[]
    deleteMany?: MediaPostScalarWhereInput | MediaPostScalarWhereInput[]
  }

  export type MediaPostUncheckedUpdateManyWithoutDocsLinkNestedInput = {
    create?: XOR<MediaPostCreateWithoutDocsLinkInput, MediaPostUncheckedCreateWithoutDocsLinkInput> | MediaPostCreateWithoutDocsLinkInput[] | MediaPostUncheckedCreateWithoutDocsLinkInput[]
    connectOrCreate?: MediaPostCreateOrConnectWithoutDocsLinkInput | MediaPostCreateOrConnectWithoutDocsLinkInput[]
    upsert?: MediaPostUpsertWithWhereUniqueWithoutDocsLinkInput | MediaPostUpsertWithWhereUniqueWithoutDocsLinkInput[]
    createMany?: MediaPostCreateManyDocsLinkInputEnvelope
    set?: MediaPostWhereUniqueInput | MediaPostWhereUniqueInput[]
    disconnect?: MediaPostWhereUniqueInput | MediaPostWhereUniqueInput[]
    delete?: MediaPostWhereUniqueInput | MediaPostWhereUniqueInput[]
    connect?: MediaPostWhereUniqueInput | MediaPostWhereUniqueInput[]
    update?: MediaPostUpdateWithWhereUniqueWithoutDocsLinkInput | MediaPostUpdateWithWhereUniqueWithoutDocsLinkInput[]
    updateMany?: MediaPostUpdateManyWithWhereWithoutDocsLinkInput | MediaPostUpdateManyWithWhereWithoutDocsLinkInput[]
    deleteMany?: MediaPostScalarWhereInput | MediaPostScalarWhereInput[]
  }

  export type LeadCreateNestedManyWithoutIndustryInput = {
    create?: XOR<LeadCreateWithoutIndustryInput, LeadUncheckedCreateWithoutIndustryInput> | LeadCreateWithoutIndustryInput[] | LeadUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutIndustryInput | LeadCreateOrConnectWithoutIndustryInput[]
    createMany?: LeadCreateManyIndustryInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type CampaignCreateNestedManyWithoutTargetIndustryInput = {
    create?: XOR<CampaignCreateWithoutTargetIndustryInput, CampaignUncheckedCreateWithoutTargetIndustryInput> | CampaignCreateWithoutTargetIndustryInput[] | CampaignUncheckedCreateWithoutTargetIndustryInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTargetIndustryInput | CampaignCreateOrConnectWithoutTargetIndustryInput[]
    createMany?: CampaignCreateManyTargetIndustryInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutIndustryInput = {
    create?: XOR<LeadCreateWithoutIndustryInput, LeadUncheckedCreateWithoutIndustryInput> | LeadCreateWithoutIndustryInput[] | LeadUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutIndustryInput | LeadCreateOrConnectWithoutIndustryInput[]
    createMany?: LeadCreateManyIndustryInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutTargetIndustryInput = {
    create?: XOR<CampaignCreateWithoutTargetIndustryInput, CampaignUncheckedCreateWithoutTargetIndustryInput> | CampaignCreateWithoutTargetIndustryInput[] | CampaignUncheckedCreateWithoutTargetIndustryInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTargetIndustryInput | CampaignCreateOrConnectWithoutTargetIndustryInput[]
    createMany?: CampaignCreateManyTargetIndustryInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type LeadUpdateManyWithoutIndustryNestedInput = {
    create?: XOR<LeadCreateWithoutIndustryInput, LeadUncheckedCreateWithoutIndustryInput> | LeadCreateWithoutIndustryInput[] | LeadUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutIndustryInput | LeadCreateOrConnectWithoutIndustryInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutIndustryInput | LeadUpsertWithWhereUniqueWithoutIndustryInput[]
    createMany?: LeadCreateManyIndustryInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutIndustryInput | LeadUpdateWithWhereUniqueWithoutIndustryInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutIndustryInput | LeadUpdateManyWithWhereWithoutIndustryInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type CampaignUpdateManyWithoutTargetIndustryNestedInput = {
    create?: XOR<CampaignCreateWithoutTargetIndustryInput, CampaignUncheckedCreateWithoutTargetIndustryInput> | CampaignCreateWithoutTargetIndustryInput[] | CampaignUncheckedCreateWithoutTargetIndustryInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTargetIndustryInput | CampaignCreateOrConnectWithoutTargetIndustryInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutTargetIndustryInput | CampaignUpsertWithWhereUniqueWithoutTargetIndustryInput[]
    createMany?: CampaignCreateManyTargetIndustryInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutTargetIndustryInput | CampaignUpdateWithWhereUniqueWithoutTargetIndustryInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutTargetIndustryInput | CampaignUpdateManyWithWhereWithoutTargetIndustryInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutIndustryNestedInput = {
    create?: XOR<LeadCreateWithoutIndustryInput, LeadUncheckedCreateWithoutIndustryInput> | LeadCreateWithoutIndustryInput[] | LeadUncheckedCreateWithoutIndustryInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutIndustryInput | LeadCreateOrConnectWithoutIndustryInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutIndustryInput | LeadUpsertWithWhereUniqueWithoutIndustryInput[]
    createMany?: LeadCreateManyIndustryInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutIndustryInput | LeadUpdateWithWhereUniqueWithoutIndustryInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutIndustryInput | LeadUpdateManyWithWhereWithoutIndustryInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutTargetIndustryNestedInput = {
    create?: XOR<CampaignCreateWithoutTargetIndustryInput, CampaignUncheckedCreateWithoutTargetIndustryInput> | CampaignCreateWithoutTargetIndustryInput[] | CampaignUncheckedCreateWithoutTargetIndustryInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTargetIndustryInput | CampaignCreateOrConnectWithoutTargetIndustryInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutTargetIndustryInput | CampaignUpsertWithWhereUniqueWithoutTargetIndustryInput[]
    createMany?: CampaignCreateManyTargetIndustryInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutTargetIndustryInput | CampaignUpdateWithWhereUniqueWithoutTargetIndustryInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutTargetIndustryInput | CampaignUpdateManyWithWhereWithoutTargetIndustryInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type IndustryCreateNestedOneWithoutLeadsInput = {
    create?: XOR<IndustryCreateWithoutLeadsInput, IndustryUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: IndustryCreateOrConnectWithoutLeadsInput
    connect?: IndustryWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutLeadsInput = {
    create?: XOR<LocationCreateWithoutLeadsInput, LocationUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutLeadsInput
    connect?: LocationWhereUniqueInput
  }

  export type CampaignCreateNestedOneWithoutLeadsInput = {
    create?: XOR<CampaignCreateWithoutLeadsInput, CampaignUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutLeadsInput
    connect?: CampaignWhereUniqueInput
  }

  export type ScrapingJobCreateNestedOneWithoutLeadsInput = {
    create?: XOR<ScrapingJobCreateWithoutLeadsInput, ScrapingJobUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: ScrapingJobCreateOrConnectWithoutLeadsInput
    connect?: ScrapingJobWhereUniqueInput
  }

  export type OutreachMessageCreateNestedManyWithoutLeadInput = {
    create?: XOR<OutreachMessageCreateWithoutLeadInput, OutreachMessageUncheckedCreateWithoutLeadInput> | OutreachMessageCreateWithoutLeadInput[] | OutreachMessageUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: OutreachMessageCreateOrConnectWithoutLeadInput | OutreachMessageCreateOrConnectWithoutLeadInput[]
    createMany?: OutreachMessageCreateManyLeadInputEnvelope
    connect?: OutreachMessageWhereUniqueInput | OutreachMessageWhereUniqueInput[]
  }

  export type MeetingCreateNestedManyWithoutLeadInput = {
    create?: XOR<MeetingCreateWithoutLeadInput, MeetingUncheckedCreateWithoutLeadInput> | MeetingCreateWithoutLeadInput[] | MeetingUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutLeadInput | MeetingCreateOrConnectWithoutLeadInput[]
    createMany?: MeetingCreateManyLeadInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type OutreachMessageUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<OutreachMessageCreateWithoutLeadInput, OutreachMessageUncheckedCreateWithoutLeadInput> | OutreachMessageCreateWithoutLeadInput[] | OutreachMessageUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: OutreachMessageCreateOrConnectWithoutLeadInput | OutreachMessageCreateOrConnectWithoutLeadInput[]
    createMany?: OutreachMessageCreateManyLeadInputEnvelope
    connect?: OutreachMessageWhereUniqueInput | OutreachMessageWhereUniqueInput[]
  }

  export type MeetingUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<MeetingCreateWithoutLeadInput, MeetingUncheckedCreateWithoutLeadInput> | MeetingCreateWithoutLeadInput[] | MeetingUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutLeadInput | MeetingCreateOrConnectWithoutLeadInput[]
    createMany?: MeetingCreateManyLeadInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumELeadStatusFieldUpdateOperationsInput = {
    set?: $Enums.ELeadStatus
  }

  export type IndustryUpdateOneWithoutLeadsNestedInput = {
    create?: XOR<IndustryCreateWithoutLeadsInput, IndustryUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: IndustryCreateOrConnectWithoutLeadsInput
    upsert?: IndustryUpsertWithoutLeadsInput
    disconnect?: IndustryWhereInput | boolean
    delete?: IndustryWhereInput | boolean
    connect?: IndustryWhereUniqueInput
    update?: XOR<XOR<IndustryUpdateToOneWithWhereWithoutLeadsInput, IndustryUpdateWithoutLeadsInput>, IndustryUncheckedUpdateWithoutLeadsInput>
  }

  export type LocationUpdateOneWithoutLeadsNestedInput = {
    create?: XOR<LocationCreateWithoutLeadsInput, LocationUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutLeadsInput
    upsert?: LocationUpsertWithoutLeadsInput
    disconnect?: LocationWhereInput | boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutLeadsInput, LocationUpdateWithoutLeadsInput>, LocationUncheckedUpdateWithoutLeadsInput>
  }

  export type CampaignUpdateOneWithoutLeadsNestedInput = {
    create?: XOR<CampaignCreateWithoutLeadsInput, CampaignUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutLeadsInput
    upsert?: CampaignUpsertWithoutLeadsInput
    disconnect?: CampaignWhereInput | boolean
    delete?: CampaignWhereInput | boolean
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutLeadsInput, CampaignUpdateWithoutLeadsInput>, CampaignUncheckedUpdateWithoutLeadsInput>
  }

  export type ScrapingJobUpdateOneWithoutLeadsNestedInput = {
    create?: XOR<ScrapingJobCreateWithoutLeadsInput, ScrapingJobUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: ScrapingJobCreateOrConnectWithoutLeadsInput
    upsert?: ScrapingJobUpsertWithoutLeadsInput
    disconnect?: ScrapingJobWhereInput | boolean
    delete?: ScrapingJobWhereInput | boolean
    connect?: ScrapingJobWhereUniqueInput
    update?: XOR<XOR<ScrapingJobUpdateToOneWithWhereWithoutLeadsInput, ScrapingJobUpdateWithoutLeadsInput>, ScrapingJobUncheckedUpdateWithoutLeadsInput>
  }

  export type OutreachMessageUpdateManyWithoutLeadNestedInput = {
    create?: XOR<OutreachMessageCreateWithoutLeadInput, OutreachMessageUncheckedCreateWithoutLeadInput> | OutreachMessageCreateWithoutLeadInput[] | OutreachMessageUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: OutreachMessageCreateOrConnectWithoutLeadInput | OutreachMessageCreateOrConnectWithoutLeadInput[]
    upsert?: OutreachMessageUpsertWithWhereUniqueWithoutLeadInput | OutreachMessageUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: OutreachMessageCreateManyLeadInputEnvelope
    set?: OutreachMessageWhereUniqueInput | OutreachMessageWhereUniqueInput[]
    disconnect?: OutreachMessageWhereUniqueInput | OutreachMessageWhereUniqueInput[]
    delete?: OutreachMessageWhereUniqueInput | OutreachMessageWhereUniqueInput[]
    connect?: OutreachMessageWhereUniqueInput | OutreachMessageWhereUniqueInput[]
    update?: OutreachMessageUpdateWithWhereUniqueWithoutLeadInput | OutreachMessageUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: OutreachMessageUpdateManyWithWhereWithoutLeadInput | OutreachMessageUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: OutreachMessageScalarWhereInput | OutreachMessageScalarWhereInput[]
  }

  export type MeetingUpdateManyWithoutLeadNestedInput = {
    create?: XOR<MeetingCreateWithoutLeadInput, MeetingUncheckedCreateWithoutLeadInput> | MeetingCreateWithoutLeadInput[] | MeetingUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutLeadInput | MeetingCreateOrConnectWithoutLeadInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutLeadInput | MeetingUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: MeetingCreateManyLeadInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutLeadInput | MeetingUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutLeadInput | MeetingUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type OutreachMessageUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<OutreachMessageCreateWithoutLeadInput, OutreachMessageUncheckedCreateWithoutLeadInput> | OutreachMessageCreateWithoutLeadInput[] | OutreachMessageUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: OutreachMessageCreateOrConnectWithoutLeadInput | OutreachMessageCreateOrConnectWithoutLeadInput[]
    upsert?: OutreachMessageUpsertWithWhereUniqueWithoutLeadInput | OutreachMessageUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: OutreachMessageCreateManyLeadInputEnvelope
    set?: OutreachMessageWhereUniqueInput | OutreachMessageWhereUniqueInput[]
    disconnect?: OutreachMessageWhereUniqueInput | OutreachMessageWhereUniqueInput[]
    delete?: OutreachMessageWhereUniqueInput | OutreachMessageWhereUniqueInput[]
    connect?: OutreachMessageWhereUniqueInput | OutreachMessageWhereUniqueInput[]
    update?: OutreachMessageUpdateWithWhereUniqueWithoutLeadInput | OutreachMessageUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: OutreachMessageUpdateManyWithWhereWithoutLeadInput | OutreachMessageUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: OutreachMessageScalarWhereInput | OutreachMessageScalarWhereInput[]
  }

  export type MeetingUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<MeetingCreateWithoutLeadInput, MeetingUncheckedCreateWithoutLeadInput> | MeetingCreateWithoutLeadInput[] | MeetingUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutLeadInput | MeetingCreateOrConnectWithoutLeadInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutLeadInput | MeetingUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: MeetingCreateManyLeadInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutLeadInput | MeetingUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutLeadInput | MeetingUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type LeadCreateNestedManyWithoutLocationInput = {
    create?: XOR<LeadCreateWithoutLocationInput, LeadUncheckedCreateWithoutLocationInput> | LeadCreateWithoutLocationInput[] | LeadUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutLocationInput | LeadCreateOrConnectWithoutLocationInput[]
    createMany?: LeadCreateManyLocationInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type CampaignCreateNestedManyWithoutTargetLocationInput = {
    create?: XOR<CampaignCreateWithoutTargetLocationInput, CampaignUncheckedCreateWithoutTargetLocationInput> | CampaignCreateWithoutTargetLocationInput[] | CampaignUncheckedCreateWithoutTargetLocationInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTargetLocationInput | CampaignCreateOrConnectWithoutTargetLocationInput[]
    createMany?: CampaignCreateManyTargetLocationInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<LeadCreateWithoutLocationInput, LeadUncheckedCreateWithoutLocationInput> | LeadCreateWithoutLocationInput[] | LeadUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutLocationInput | LeadCreateOrConnectWithoutLocationInput[]
    createMany?: LeadCreateManyLocationInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutTargetLocationInput = {
    create?: XOR<CampaignCreateWithoutTargetLocationInput, CampaignUncheckedCreateWithoutTargetLocationInput> | CampaignCreateWithoutTargetLocationInput[] | CampaignUncheckedCreateWithoutTargetLocationInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTargetLocationInput | CampaignCreateOrConnectWithoutTargetLocationInput[]
    createMany?: CampaignCreateManyTargetLocationInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type LeadUpdateManyWithoutLocationNestedInput = {
    create?: XOR<LeadCreateWithoutLocationInput, LeadUncheckedCreateWithoutLocationInput> | LeadCreateWithoutLocationInput[] | LeadUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutLocationInput | LeadCreateOrConnectWithoutLocationInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutLocationInput | LeadUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: LeadCreateManyLocationInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutLocationInput | LeadUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutLocationInput | LeadUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type CampaignUpdateManyWithoutTargetLocationNestedInput = {
    create?: XOR<CampaignCreateWithoutTargetLocationInput, CampaignUncheckedCreateWithoutTargetLocationInput> | CampaignCreateWithoutTargetLocationInput[] | CampaignUncheckedCreateWithoutTargetLocationInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTargetLocationInput | CampaignCreateOrConnectWithoutTargetLocationInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutTargetLocationInput | CampaignUpsertWithWhereUniqueWithoutTargetLocationInput[]
    createMany?: CampaignCreateManyTargetLocationInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutTargetLocationInput | CampaignUpdateWithWhereUniqueWithoutTargetLocationInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutTargetLocationInput | CampaignUpdateManyWithWhereWithoutTargetLocationInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<LeadCreateWithoutLocationInput, LeadUncheckedCreateWithoutLocationInput> | LeadCreateWithoutLocationInput[] | LeadUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutLocationInput | LeadCreateOrConnectWithoutLocationInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutLocationInput | LeadUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: LeadCreateManyLocationInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutLocationInput | LeadUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutLocationInput | LeadUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutTargetLocationNestedInput = {
    create?: XOR<CampaignCreateWithoutTargetLocationInput, CampaignUncheckedCreateWithoutTargetLocationInput> | CampaignCreateWithoutTargetLocationInput[] | CampaignUncheckedCreateWithoutTargetLocationInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTargetLocationInput | CampaignCreateOrConnectWithoutTargetLocationInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutTargetLocationInput | CampaignUpsertWithWhereUniqueWithoutTargetLocationInput[]
    createMany?: CampaignCreateManyTargetLocationInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutTargetLocationInput | CampaignUpdateWithWhereUniqueWithoutTargetLocationInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutTargetLocationInput | CampaignUpdateManyWithWhereWithoutTargetLocationInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type DocsLinkCreateNestedOneWithoutPostsInput = {
    create?: XOR<DocsLinkCreateWithoutPostsInput, DocsLinkUncheckedCreateWithoutPostsInput>
    connectOrCreate?: DocsLinkCreateOrConnectWithoutPostsInput
    connect?: DocsLinkWhereUniqueInput
  }

  export type EnumEMediaPostStatusFieldUpdateOperationsInput = {
    set?: $Enums.EMediaPostStatus
  }

  export type DocsLinkUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<DocsLinkCreateWithoutPostsInput, DocsLinkUncheckedCreateWithoutPostsInput>
    connectOrCreate?: DocsLinkCreateOrConnectWithoutPostsInput
    upsert?: DocsLinkUpsertWithoutPostsInput
    connect?: DocsLinkWhereUniqueInput
    update?: XOR<XOR<DocsLinkUpdateToOneWithWhereWithoutPostsInput, DocsLinkUpdateWithoutPostsInput>, DocsLinkUncheckedUpdateWithoutPostsInput>
  }

  export type LeadCreateNestedOneWithoutMeetingsInput = {
    create?: XOR<LeadCreateWithoutMeetingsInput, LeadUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutMeetingsInput
    connect?: LeadWhereUniqueInput
  }

  export type CampaignCreateNestedOneWithoutMeetingsInput = {
    create?: XOR<CampaignCreateWithoutMeetingsInput, CampaignUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutMeetingsInput
    connect?: CampaignWhereUniqueInput
  }

  export type EnumEMeetingStatusFieldUpdateOperationsInput = {
    set?: $Enums.EMeetingStatus
  }

  export type LeadUpdateOneRequiredWithoutMeetingsNestedInput = {
    create?: XOR<LeadCreateWithoutMeetingsInput, LeadUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: LeadCreateOrConnectWithoutMeetingsInput
    upsert?: LeadUpsertWithoutMeetingsInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutMeetingsInput, LeadUpdateWithoutMeetingsInput>, LeadUncheckedUpdateWithoutMeetingsInput>
  }

  export type CampaignUpdateOneWithoutMeetingsNestedInput = {
    create?: XOR<CampaignCreateWithoutMeetingsInput, CampaignUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutMeetingsInput
    upsert?: CampaignUpsertWithoutMeetingsInput
    disconnect?: CampaignWhereInput | boolean
    delete?: CampaignWhereInput | boolean
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutMeetingsInput, CampaignUpdateWithoutMeetingsInput>, CampaignUncheckedUpdateWithoutMeetingsInput>
  }

  export type LeadCreateNestedOneWithoutOutreachMessagesInput = {
    create?: XOR<LeadCreateWithoutOutreachMessagesInput, LeadUncheckedCreateWithoutOutreachMessagesInput>
    connectOrCreate?: LeadCreateOrConnectWithoutOutreachMessagesInput
    connect?: LeadWhereUniqueInput
  }

  export type CampaignCreateNestedOneWithoutOutreachMessagesInput = {
    create?: XOR<CampaignCreateWithoutOutreachMessagesInput, CampaignUncheckedCreateWithoutOutreachMessagesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutOutreachMessagesInput
    connect?: CampaignWhereUniqueInput
  }

  export type EnumEOutreachTypeFieldUpdateOperationsInput = {
    set?: $Enums.EOutreachType
  }

  export type EnumEMessageSenderFieldUpdateOperationsInput = {
    set?: $Enums.EMessageSender
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumEReplyStatusFieldUpdateOperationsInput = {
    set?: $Enums.EReplyStatus
  }

  export type LeadUpdateOneRequiredWithoutOutreachMessagesNestedInput = {
    create?: XOR<LeadCreateWithoutOutreachMessagesInput, LeadUncheckedCreateWithoutOutreachMessagesInput>
    connectOrCreate?: LeadCreateOrConnectWithoutOutreachMessagesInput
    upsert?: LeadUpsertWithoutOutreachMessagesInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutOutreachMessagesInput, LeadUpdateWithoutOutreachMessagesInput>, LeadUncheckedUpdateWithoutOutreachMessagesInput>
  }

  export type CampaignUpdateOneRequiredWithoutOutreachMessagesNestedInput = {
    create?: XOR<CampaignCreateWithoutOutreachMessagesInput, CampaignUncheckedCreateWithoutOutreachMessagesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutOutreachMessagesInput
    upsert?: CampaignUpsertWithoutOutreachMessagesInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutOutreachMessagesInput, CampaignUpdateWithoutOutreachMessagesInput>, CampaignUncheckedUpdateWithoutOutreachMessagesInput>
  }

  export type CampaignCreateNestedOneWithoutScrapingJobsInput = {
    create?: XOR<CampaignCreateWithoutScrapingJobsInput, CampaignUncheckedCreateWithoutScrapingJobsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutScrapingJobsInput
    connect?: CampaignWhereUniqueInput
  }

  export type LeadCreateNestedManyWithoutScrapingJobInput = {
    create?: XOR<LeadCreateWithoutScrapingJobInput, LeadUncheckedCreateWithoutScrapingJobInput> | LeadCreateWithoutScrapingJobInput[] | LeadUncheckedCreateWithoutScrapingJobInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutScrapingJobInput | LeadCreateOrConnectWithoutScrapingJobInput[]
    createMany?: LeadCreateManyScrapingJobInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutScrapingJobInput = {
    create?: XOR<LeadCreateWithoutScrapingJobInput, LeadUncheckedCreateWithoutScrapingJobInput> | LeadCreateWithoutScrapingJobInput[] | LeadUncheckedCreateWithoutScrapingJobInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutScrapingJobInput | LeadCreateOrConnectWithoutScrapingJobInput[]
    createMany?: LeadCreateManyScrapingJobInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type EnumEScrapingJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.EScrapingJobStatus
  }

  export type CampaignUpdateOneRequiredWithoutScrapingJobsNestedInput = {
    create?: XOR<CampaignCreateWithoutScrapingJobsInput, CampaignUncheckedCreateWithoutScrapingJobsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutScrapingJobsInput
    upsert?: CampaignUpsertWithoutScrapingJobsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutScrapingJobsInput, CampaignUpdateWithoutScrapingJobsInput>, CampaignUncheckedUpdateWithoutScrapingJobsInput>
  }

  export type LeadUpdateManyWithoutScrapingJobNestedInput = {
    create?: XOR<LeadCreateWithoutScrapingJobInput, LeadUncheckedCreateWithoutScrapingJobInput> | LeadCreateWithoutScrapingJobInput[] | LeadUncheckedCreateWithoutScrapingJobInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutScrapingJobInput | LeadCreateOrConnectWithoutScrapingJobInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutScrapingJobInput | LeadUpsertWithWhereUniqueWithoutScrapingJobInput[]
    createMany?: LeadCreateManyScrapingJobInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutScrapingJobInput | LeadUpdateWithWhereUniqueWithoutScrapingJobInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutScrapingJobInput | LeadUpdateManyWithWhereWithoutScrapingJobInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutScrapingJobNestedInput = {
    create?: XOR<LeadCreateWithoutScrapingJobInput, LeadUncheckedCreateWithoutScrapingJobInput> | LeadCreateWithoutScrapingJobInput[] | LeadUncheckedCreateWithoutScrapingJobInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutScrapingJobInput | LeadCreateOrConnectWithoutScrapingJobInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutScrapingJobInput | LeadUpsertWithWhereUniqueWithoutScrapingJobInput[]
    createMany?: LeadCreateManyScrapingJobInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutScrapingJobInput | LeadUpdateWithWhereUniqueWithoutScrapingJobInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutScrapingJobInput | LeadUpdateManyWithWhereWithoutScrapingJobInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type CampaignCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CampaignCreateWithoutCreatedByInput, CampaignUncheckedCreateWithoutCreatedByInput> | CampaignCreateWithoutCreatedByInput[] | CampaignUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatedByInput | CampaignCreateOrConnectWithoutCreatedByInput[]
    createMany?: CampaignCreateManyCreatedByInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type DocsLinkCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DocsLinkCreateWithoutCreatedByInput, DocsLinkUncheckedCreateWithoutCreatedByInput> | DocsLinkCreateWithoutCreatedByInput[] | DocsLinkUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DocsLinkCreateOrConnectWithoutCreatedByInput | DocsLinkCreateOrConnectWithoutCreatedByInput[]
    createMany?: DocsLinkCreateManyCreatedByInputEnvelope
    connect?: DocsLinkWhereUniqueInput | DocsLinkWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CampaignCreateWithoutCreatedByInput, CampaignUncheckedCreateWithoutCreatedByInput> | CampaignCreateWithoutCreatedByInput[] | CampaignUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatedByInput | CampaignCreateOrConnectWithoutCreatedByInput[]
    createMany?: CampaignCreateManyCreatedByInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type DocsLinkUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DocsLinkCreateWithoutCreatedByInput, DocsLinkUncheckedCreateWithoutCreatedByInput> | DocsLinkCreateWithoutCreatedByInput[] | DocsLinkUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DocsLinkCreateOrConnectWithoutCreatedByInput | DocsLinkCreateOrConnectWithoutCreatedByInput[]
    createMany?: DocsLinkCreateManyCreatedByInputEnvelope
    connect?: DocsLinkWhereUniqueInput | DocsLinkWhereUniqueInput[]
  }

  export type EnumERoleFieldUpdateOperationsInput = {
    set?: $Enums.ERole
  }

  export type CampaignUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CampaignCreateWithoutCreatedByInput, CampaignUncheckedCreateWithoutCreatedByInput> | CampaignCreateWithoutCreatedByInput[] | CampaignUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatedByInput | CampaignCreateOrConnectWithoutCreatedByInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutCreatedByInput | CampaignUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CampaignCreateManyCreatedByInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutCreatedByInput | CampaignUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutCreatedByInput | CampaignUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type DocsLinkUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DocsLinkCreateWithoutCreatedByInput, DocsLinkUncheckedCreateWithoutCreatedByInput> | DocsLinkCreateWithoutCreatedByInput[] | DocsLinkUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DocsLinkCreateOrConnectWithoutCreatedByInput | DocsLinkCreateOrConnectWithoutCreatedByInput[]
    upsert?: DocsLinkUpsertWithWhereUniqueWithoutCreatedByInput | DocsLinkUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DocsLinkCreateManyCreatedByInputEnvelope
    set?: DocsLinkWhereUniqueInput | DocsLinkWhereUniqueInput[]
    disconnect?: DocsLinkWhereUniqueInput | DocsLinkWhereUniqueInput[]
    delete?: DocsLinkWhereUniqueInput | DocsLinkWhereUniqueInput[]
    connect?: DocsLinkWhereUniqueInput | DocsLinkWhereUniqueInput[]
    update?: DocsLinkUpdateWithWhereUniqueWithoutCreatedByInput | DocsLinkUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DocsLinkUpdateManyWithWhereWithoutCreatedByInput | DocsLinkUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DocsLinkScalarWhereInput | DocsLinkScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CampaignCreateWithoutCreatedByInput, CampaignUncheckedCreateWithoutCreatedByInput> | CampaignCreateWithoutCreatedByInput[] | CampaignUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutCreatedByInput | CampaignCreateOrConnectWithoutCreatedByInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutCreatedByInput | CampaignUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CampaignCreateManyCreatedByInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutCreatedByInput | CampaignUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutCreatedByInput | CampaignUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type DocsLinkUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DocsLinkCreateWithoutCreatedByInput, DocsLinkUncheckedCreateWithoutCreatedByInput> | DocsLinkCreateWithoutCreatedByInput[] | DocsLinkUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DocsLinkCreateOrConnectWithoutCreatedByInput | DocsLinkCreateOrConnectWithoutCreatedByInput[]
    upsert?: DocsLinkUpsertWithWhereUniqueWithoutCreatedByInput | DocsLinkUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DocsLinkCreateManyCreatedByInputEnvelope
    set?: DocsLinkWhereUniqueInput | DocsLinkWhereUniqueInput[]
    disconnect?: DocsLinkWhereUniqueInput | DocsLinkWhereUniqueInput[]
    delete?: DocsLinkWhereUniqueInput | DocsLinkWhereUniqueInput[]
    connect?: DocsLinkWhereUniqueInput | DocsLinkWhereUniqueInput[]
    update?: DocsLinkUpdateWithWhereUniqueWithoutCreatedByInput | DocsLinkUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DocsLinkUpdateManyWithWhereWithoutCreatedByInput | DocsLinkUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DocsLinkScalarWhereInput | DocsLinkScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumECampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ECampaignStatus | EnumECampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ECampaignStatus[] | ListEnumECampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ECampaignStatus[] | ListEnumECampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumECampaignStatusFilter<$PrismaModel> | $Enums.ECampaignStatus
  }

  export type NestedEnumEPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.EPlatform | EnumEPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.EPlatform[] | ListEnumEPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.EPlatform[] | ListEnumEPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumEPlatformFilter<$PrismaModel> | $Enums.EPlatform
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumECampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ECampaignStatus | EnumECampaignStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ECampaignStatus[] | ListEnumECampaignStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ECampaignStatus[] | ListEnumECampaignStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumECampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.ECampaignStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumECampaignStatusFilter<$PrismaModel>
    _max?: NestedEnumECampaignStatusFilter<$PrismaModel>
  }

  export type NestedEnumEPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EPlatform | EnumEPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.EPlatform[] | ListEnumEPlatformFieldRefInput<$PrismaModel>
    notIn?: $Enums.EPlatform[] | ListEnumEPlatformFieldRefInput<$PrismaModel>
    not?: NestedEnumEPlatformWithAggregatesFilter<$PrismaModel> | $Enums.EPlatform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEPlatformFilter<$PrismaModel>
    _max?: NestedEnumEPlatformFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumELeadStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ELeadStatus | EnumELeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ELeadStatus[] | ListEnumELeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ELeadStatus[] | ListEnumELeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumELeadStatusFilter<$PrismaModel> | $Enums.ELeadStatus
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumELeadStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ELeadStatus | EnumELeadStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ELeadStatus[] | ListEnumELeadStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ELeadStatus[] | ListEnumELeadStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumELeadStatusWithAggregatesFilter<$PrismaModel> | $Enums.ELeadStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumELeadStatusFilter<$PrismaModel>
    _max?: NestedEnumELeadStatusFilter<$PrismaModel>
  }

  export type NestedEnumEMediaPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EMediaPostStatus | EnumEMediaPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EMediaPostStatus[] | ListEnumEMediaPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EMediaPostStatus[] | ListEnumEMediaPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEMediaPostStatusFilter<$PrismaModel> | $Enums.EMediaPostStatus
  }

  export type NestedEnumEMediaPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EMediaPostStatus | EnumEMediaPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EMediaPostStatus[] | ListEnumEMediaPostStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EMediaPostStatus[] | ListEnumEMediaPostStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEMediaPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.EMediaPostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEMediaPostStatusFilter<$PrismaModel>
    _max?: NestedEnumEMediaPostStatusFilter<$PrismaModel>
  }

  export type NestedEnumEMeetingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EMeetingStatus | EnumEMeetingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EMeetingStatus[] | ListEnumEMeetingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EMeetingStatus[] | ListEnumEMeetingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEMeetingStatusFilter<$PrismaModel> | $Enums.EMeetingStatus
  }

  export type NestedEnumEMeetingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EMeetingStatus | EnumEMeetingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EMeetingStatus[] | ListEnumEMeetingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EMeetingStatus[] | ListEnumEMeetingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEMeetingStatusWithAggregatesFilter<$PrismaModel> | $Enums.EMeetingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEMeetingStatusFilter<$PrismaModel>
    _max?: NestedEnumEMeetingStatusFilter<$PrismaModel>
  }

  export type NestedEnumEOutreachTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EOutreachType | EnumEOutreachTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EOutreachType[] | ListEnumEOutreachTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EOutreachType[] | ListEnumEOutreachTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEOutreachTypeFilter<$PrismaModel> | $Enums.EOutreachType
  }

  export type NestedEnumEMessageSenderFilter<$PrismaModel = never> = {
    equals?: $Enums.EMessageSender | EnumEMessageSenderFieldRefInput<$PrismaModel>
    in?: $Enums.EMessageSender[] | ListEnumEMessageSenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.EMessageSender[] | ListEnumEMessageSenderFieldRefInput<$PrismaModel>
    not?: NestedEnumEMessageSenderFilter<$PrismaModel> | $Enums.EMessageSender
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumEReplyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EReplyStatus | EnumEReplyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EReplyStatus[] | ListEnumEReplyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EReplyStatus[] | ListEnumEReplyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEReplyStatusFilter<$PrismaModel> | $Enums.EReplyStatus
  }

  export type NestedEnumEOutreachTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EOutreachType | EnumEOutreachTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EOutreachType[] | ListEnumEOutreachTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EOutreachType[] | ListEnumEOutreachTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEOutreachTypeWithAggregatesFilter<$PrismaModel> | $Enums.EOutreachType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEOutreachTypeFilter<$PrismaModel>
    _max?: NestedEnumEOutreachTypeFilter<$PrismaModel>
  }

  export type NestedEnumEMessageSenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EMessageSender | EnumEMessageSenderFieldRefInput<$PrismaModel>
    in?: $Enums.EMessageSender[] | ListEnumEMessageSenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.EMessageSender[] | ListEnumEMessageSenderFieldRefInput<$PrismaModel>
    not?: NestedEnumEMessageSenderWithAggregatesFilter<$PrismaModel> | $Enums.EMessageSender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEMessageSenderFilter<$PrismaModel>
    _max?: NestedEnumEMessageSenderFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumEReplyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EReplyStatus | EnumEReplyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EReplyStatus[] | ListEnumEReplyStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EReplyStatus[] | ListEnumEReplyStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEReplyStatusWithAggregatesFilter<$PrismaModel> | $Enums.EReplyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEReplyStatusFilter<$PrismaModel>
    _max?: NestedEnumEReplyStatusFilter<$PrismaModel>
  }

  export type NestedEnumEScrapingJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EScrapingJobStatus | EnumEScrapingJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EScrapingJobStatus[] | ListEnumEScrapingJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EScrapingJobStatus[] | ListEnumEScrapingJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEScrapingJobStatusFilter<$PrismaModel> | $Enums.EScrapingJobStatus
  }

  export type NestedEnumEScrapingJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EScrapingJobStatus | EnumEScrapingJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EScrapingJobStatus[] | ListEnumEScrapingJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EScrapingJobStatus[] | ListEnumEScrapingJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEScrapingJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.EScrapingJobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEScrapingJobStatusFilter<$PrismaModel>
    _max?: NestedEnumEScrapingJobStatusFilter<$PrismaModel>
  }

  export type NestedEnumERoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ERole | EnumERoleFieldRefInput<$PrismaModel>
    in?: $Enums.ERole[] | ListEnumERoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ERole[] | ListEnumERoleFieldRefInput<$PrismaModel>
    not?: NestedEnumERoleFilter<$PrismaModel> | $Enums.ERole
  }

  export type NestedEnumERoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ERole | EnumERoleFieldRefInput<$PrismaModel>
    in?: $Enums.ERole[] | ListEnumERoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ERole[] | ListEnumERoleFieldRefInput<$PrismaModel>
    not?: NestedEnumERoleWithAggregatesFilter<$PrismaModel> | $Enums.ERole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumERoleFilter<$PrismaModel>
    _max?: NestedEnumERoleFilter<$PrismaModel>
  }

  export type IndustryCreateWithoutCampaignsInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadCreateNestedManyWithoutIndustryInput
  }

  export type IndustryUncheckedCreateWithoutCampaignsInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutIndustryInput
  }

  export type IndustryCreateOrConnectWithoutCampaignsInput = {
    where: IndustryWhereUniqueInput
    create: XOR<IndustryCreateWithoutCampaignsInput, IndustryUncheckedCreateWithoutCampaignsInput>
  }

  export type LocationCreateWithoutCampaignsInput = {
    id?: string
    city: string
    state?: string | null
    country?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutCampaignsInput = {
    id?: string
    city: string
    state?: string | null
    country?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutCampaignsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutCampaignsInput, LocationUncheckedCreateWithoutCampaignsInput>
  }

  export type UserCreateWithoutCampaignsInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.ERole
    password: string
    contactNo: string
    photo?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isBlocked?: boolean
    docsLinks?: DocsLinkCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCampaignsInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.ERole
    password: string
    contactNo: string
    photo?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isBlocked?: boolean
    docsLinks?: DocsLinkUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCampaignsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
  }

  export type LeadCreateWithoutCampaignInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    platform: $Enums.EPlatform
    platformUrl?: string | null
    profileUsername?: string | null
    followerCount?: number
    bio?: string | null
    imageUrl?: string | null
    website?: string | null
    totalScore?: number | null
    role?: string | null
    status?: $Enums.ELeadStatus
    gmailThreadId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industry?: IndustryCreateNestedOneWithoutLeadsInput
    location?: LocationCreateNestedOneWithoutLeadsInput
    scrapingJob?: ScrapingJobCreateNestedOneWithoutLeadsInput
    outreachMessages?: OutreachMessageCreateNestedManyWithoutLeadInput
    meetings?: MeetingCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutCampaignInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    platform: $Enums.EPlatform
    platformUrl?: string | null
    profileUsername?: string | null
    followerCount?: number
    bio?: string | null
    imageUrl?: string | null
    website?: string | null
    totalScore?: number | null
    role?: string | null
    status?: $Enums.ELeadStatus
    industryId?: string | null
    locationId?: string | null
    scrapingJobId?: string | null
    gmailThreadId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    outreachMessages?: OutreachMessageUncheckedCreateNestedManyWithoutLeadInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutCampaignInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput>
  }

  export type LeadCreateManyCampaignInputEnvelope = {
    data: LeadCreateManyCampaignInput | LeadCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type OutreachMessageCreateWithoutCampaignInput = {
    id?: string
    type: $Enums.EOutreachType
    senderType?: $Enums.EMessageSender
    subject?: string | null
    body: string
    sentAt?: Date | string | null
    replyStatus?: $Enums.EReplyStatus
    replyContent?: string | null
    isFollowUp?: boolean
    followUpCount?: number
    gmailThreadId?: string | null
    createdAt?: Date | string
    lead: LeadCreateNestedOneWithoutOutreachMessagesInput
  }

  export type OutreachMessageUncheckedCreateWithoutCampaignInput = {
    id?: string
    leadId: string
    type: $Enums.EOutreachType
    senderType?: $Enums.EMessageSender
    subject?: string | null
    body: string
    sentAt?: Date | string | null
    replyStatus?: $Enums.EReplyStatus
    replyContent?: string | null
    isFollowUp?: boolean
    followUpCount?: number
    gmailThreadId?: string | null
    createdAt?: Date | string
  }

  export type OutreachMessageCreateOrConnectWithoutCampaignInput = {
    where: OutreachMessageWhereUniqueInput
    create: XOR<OutreachMessageCreateWithoutCampaignInput, OutreachMessageUncheckedCreateWithoutCampaignInput>
  }

  export type OutreachMessageCreateManyCampaignInputEnvelope = {
    data: OutreachMessageCreateManyCampaignInput | OutreachMessageCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type ScrapingJobCreateWithoutCampaignInput = {
    id?: string
    platform: $Enums.EPlatform
    status?: $Enums.EScrapingJobStatus
    targetQuery?: string | null
    leadsFound?: number
    leadsExtracted?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorLog?: string | null
    createdAt?: Date | string
    leads?: LeadCreateNestedManyWithoutScrapingJobInput
  }

  export type ScrapingJobUncheckedCreateWithoutCampaignInput = {
    id?: string
    platform: $Enums.EPlatform
    status?: $Enums.EScrapingJobStatus
    targetQuery?: string | null
    leadsFound?: number
    leadsExtracted?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorLog?: string | null
    createdAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutScrapingJobInput
  }

  export type ScrapingJobCreateOrConnectWithoutCampaignInput = {
    where: ScrapingJobWhereUniqueInput
    create: XOR<ScrapingJobCreateWithoutCampaignInput, ScrapingJobUncheckedCreateWithoutCampaignInput>
  }

  export type ScrapingJobCreateManyCampaignInputEnvelope = {
    data: ScrapingJobCreateManyCampaignInput | ScrapingJobCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type MeetingCreateWithoutCampaignInput = {
    id?: string
    title: string
    startTime: Date | string
    endTime: Date | string
    meetingLink?: string | null
    status?: $Enums.EMeetingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lead: LeadCreateNestedOneWithoutMeetingsInput
  }

  export type MeetingUncheckedCreateWithoutCampaignInput = {
    id?: string
    title: string
    leadId: string
    startTime: Date | string
    endTime: Date | string
    meetingLink?: string | null
    status?: $Enums.EMeetingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingCreateOrConnectWithoutCampaignInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutCampaignInput, MeetingUncheckedCreateWithoutCampaignInput>
  }

  export type MeetingCreateManyCampaignInputEnvelope = {
    data: MeetingCreateManyCampaignInput | MeetingCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type IndustryUpsertWithoutCampaignsInput = {
    update: XOR<IndustryUpdateWithoutCampaignsInput, IndustryUncheckedUpdateWithoutCampaignsInput>
    create: XOR<IndustryCreateWithoutCampaignsInput, IndustryUncheckedCreateWithoutCampaignsInput>
    where?: IndustryWhereInput
  }

  export type IndustryUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: IndustryWhereInput
    data: XOR<IndustryUpdateWithoutCampaignsInput, IndustryUncheckedUpdateWithoutCampaignsInput>
  }

  export type IndustryUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutIndustryNestedInput
  }

  export type IndustryUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutIndustryNestedInput
  }

  export type LocationUpsertWithoutCampaignsInput = {
    update: XOR<LocationUpdateWithoutCampaignsInput, LocationUncheckedUpdateWithoutCampaignsInput>
    create: XOR<LocationCreateWithoutCampaignsInput, LocationUncheckedCreateWithoutCampaignsInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutCampaignsInput, LocationUncheckedUpdateWithoutCampaignsInput>
  }

  export type LocationUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type UserUpsertWithoutCampaignsInput = {
    update: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
    create: XOR<UserCreateWithoutCampaignsInput, UserUncheckedCreateWithoutCampaignsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCampaignsInput, UserUncheckedUpdateWithoutCampaignsInput>
  }

  export type UserUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumERoleFieldUpdateOperationsInput | $Enums.ERole
    password?: StringFieldUpdateOperationsInput | string
    contactNo?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    docsLinks?: DocsLinkUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumERoleFieldUpdateOperationsInput | $Enums.ERole
    password?: StringFieldUpdateOperationsInput | string
    contactNo?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    docsLinks?: DocsLinkUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type LeadUpsertWithWhereUniqueWithoutCampaignInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutCampaignInput, LeadUncheckedUpdateWithoutCampaignInput>
    create: XOR<LeadCreateWithoutCampaignInput, LeadUncheckedCreateWithoutCampaignInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutCampaignInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutCampaignInput, LeadUncheckedUpdateWithoutCampaignInput>
  }

  export type LeadUpdateManyWithWhereWithoutCampaignInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutCampaignInput>
  }

  export type LeadScalarWhereInput = {
    AND?: LeadScalarWhereInput | LeadScalarWhereInput[]
    OR?: LeadScalarWhereInput[]
    NOT?: LeadScalarWhereInput | LeadScalarWhereInput[]
    id?: StringFilter<"Lead"> | string
    name?: StringFilter<"Lead"> | string
    email?: StringNullableFilter<"Lead"> | string | null
    phone?: StringNullableFilter<"Lead"> | string | null
    platform?: EnumEPlatformFilter<"Lead"> | $Enums.EPlatform
    platformUrl?: StringNullableFilter<"Lead"> | string | null
    profileUsername?: StringNullableFilter<"Lead"> | string | null
    followerCount?: IntFilter<"Lead"> | number
    bio?: StringNullableFilter<"Lead"> | string | null
    imageUrl?: StringNullableFilter<"Lead"> | string | null
    website?: StringNullableFilter<"Lead"> | string | null
    totalScore?: FloatNullableFilter<"Lead"> | number | null
    role?: StringNullableFilter<"Lead"> | string | null
    status?: EnumELeadStatusFilter<"Lead"> | $Enums.ELeadStatus
    industryId?: StringNullableFilter<"Lead"> | string | null
    locationId?: StringNullableFilter<"Lead"> | string | null
    campaignId?: StringNullableFilter<"Lead"> | string | null
    scrapingJobId?: StringNullableFilter<"Lead"> | string | null
    gmailThreadId?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
  }

  export type OutreachMessageUpsertWithWhereUniqueWithoutCampaignInput = {
    where: OutreachMessageWhereUniqueInput
    update: XOR<OutreachMessageUpdateWithoutCampaignInput, OutreachMessageUncheckedUpdateWithoutCampaignInput>
    create: XOR<OutreachMessageCreateWithoutCampaignInput, OutreachMessageUncheckedCreateWithoutCampaignInput>
  }

  export type OutreachMessageUpdateWithWhereUniqueWithoutCampaignInput = {
    where: OutreachMessageWhereUniqueInput
    data: XOR<OutreachMessageUpdateWithoutCampaignInput, OutreachMessageUncheckedUpdateWithoutCampaignInput>
  }

  export type OutreachMessageUpdateManyWithWhereWithoutCampaignInput = {
    where: OutreachMessageScalarWhereInput
    data: XOR<OutreachMessageUpdateManyMutationInput, OutreachMessageUncheckedUpdateManyWithoutCampaignInput>
  }

  export type OutreachMessageScalarWhereInput = {
    AND?: OutreachMessageScalarWhereInput | OutreachMessageScalarWhereInput[]
    OR?: OutreachMessageScalarWhereInput[]
    NOT?: OutreachMessageScalarWhereInput | OutreachMessageScalarWhereInput[]
    id?: StringFilter<"OutreachMessage"> | string
    leadId?: StringFilter<"OutreachMessage"> | string
    campaignId?: StringFilter<"OutreachMessage"> | string
    type?: EnumEOutreachTypeFilter<"OutreachMessage"> | $Enums.EOutreachType
    senderType?: EnumEMessageSenderFilter<"OutreachMessage"> | $Enums.EMessageSender
    subject?: StringNullableFilter<"OutreachMessage"> | string | null
    body?: StringFilter<"OutreachMessage"> | string
    sentAt?: DateTimeNullableFilter<"OutreachMessage"> | Date | string | null
    replyStatus?: EnumEReplyStatusFilter<"OutreachMessage"> | $Enums.EReplyStatus
    replyContent?: StringNullableFilter<"OutreachMessage"> | string | null
    isFollowUp?: BoolFilter<"OutreachMessage"> | boolean
    followUpCount?: IntFilter<"OutreachMessage"> | number
    gmailThreadId?: StringNullableFilter<"OutreachMessage"> | string | null
    createdAt?: DateTimeFilter<"OutreachMessage"> | Date | string
  }

  export type ScrapingJobUpsertWithWhereUniqueWithoutCampaignInput = {
    where: ScrapingJobWhereUniqueInput
    update: XOR<ScrapingJobUpdateWithoutCampaignInput, ScrapingJobUncheckedUpdateWithoutCampaignInput>
    create: XOR<ScrapingJobCreateWithoutCampaignInput, ScrapingJobUncheckedCreateWithoutCampaignInput>
  }

  export type ScrapingJobUpdateWithWhereUniqueWithoutCampaignInput = {
    where: ScrapingJobWhereUniqueInput
    data: XOR<ScrapingJobUpdateWithoutCampaignInput, ScrapingJobUncheckedUpdateWithoutCampaignInput>
  }

  export type ScrapingJobUpdateManyWithWhereWithoutCampaignInput = {
    where: ScrapingJobScalarWhereInput
    data: XOR<ScrapingJobUpdateManyMutationInput, ScrapingJobUncheckedUpdateManyWithoutCampaignInput>
  }

  export type ScrapingJobScalarWhereInput = {
    AND?: ScrapingJobScalarWhereInput | ScrapingJobScalarWhereInput[]
    OR?: ScrapingJobScalarWhereInput[]
    NOT?: ScrapingJobScalarWhereInput | ScrapingJobScalarWhereInput[]
    id?: StringFilter<"ScrapingJob"> | string
    campaignId?: StringFilter<"ScrapingJob"> | string
    platform?: EnumEPlatformFilter<"ScrapingJob"> | $Enums.EPlatform
    status?: EnumEScrapingJobStatusFilter<"ScrapingJob"> | $Enums.EScrapingJobStatus
    targetQuery?: StringNullableFilter<"ScrapingJob"> | string | null
    leadsFound?: IntFilter<"ScrapingJob"> | number
    leadsExtracted?: IntFilter<"ScrapingJob"> | number
    startedAt?: DateTimeNullableFilter<"ScrapingJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ScrapingJob"> | Date | string | null
    errorLog?: StringNullableFilter<"ScrapingJob"> | string | null
    createdAt?: DateTimeFilter<"ScrapingJob"> | Date | string
  }

  export type MeetingUpsertWithWhereUniqueWithoutCampaignInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutCampaignInput, MeetingUncheckedUpdateWithoutCampaignInput>
    create: XOR<MeetingCreateWithoutCampaignInput, MeetingUncheckedCreateWithoutCampaignInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutCampaignInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutCampaignInput, MeetingUncheckedUpdateWithoutCampaignInput>
  }

  export type MeetingUpdateManyWithWhereWithoutCampaignInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutCampaignInput>
  }

  export type MeetingScalarWhereInput = {
    AND?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
    OR?: MeetingScalarWhereInput[]
    NOT?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
    id?: StringFilter<"Meeting"> | string
    title?: StringFilter<"Meeting"> | string
    leadId?: StringFilter<"Meeting"> | string
    campaignId?: StringNullableFilter<"Meeting"> | string | null
    startTime?: DateTimeFilter<"Meeting"> | Date | string
    endTime?: DateTimeFilter<"Meeting"> | Date | string
    meetingLink?: StringNullableFilter<"Meeting"> | string | null
    status?: EnumEMeetingStatusFilter<"Meeting"> | $Enums.EMeetingStatus
    notes?: StringNullableFilter<"Meeting"> | string | null
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
  }

  export type UserCreateWithoutDocsLinksInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.ERole
    password: string
    contactNo: string
    photo?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isBlocked?: boolean
    campaigns?: CampaignCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutDocsLinksInput = {
    id?: string
    name: string
    email: string
    role?: $Enums.ERole
    password: string
    contactNo: string
    photo?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isBlocked?: boolean
    campaigns?: CampaignUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutDocsLinksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDocsLinksInput, UserUncheckedCreateWithoutDocsLinksInput>
  }

  export type MediaPostCreateWithoutDocsLinkInput = {
    id?: string
    heading: string
    body: string
    postTime?: Date | string
    status?: $Enums.EMediaPostStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaPostUncheckedCreateWithoutDocsLinkInput = {
    id?: string
    heading: string
    body: string
    postTime?: Date | string
    status?: $Enums.EMediaPostStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaPostCreateOrConnectWithoutDocsLinkInput = {
    where: MediaPostWhereUniqueInput
    create: XOR<MediaPostCreateWithoutDocsLinkInput, MediaPostUncheckedCreateWithoutDocsLinkInput>
  }

  export type MediaPostCreateManyDocsLinkInputEnvelope = {
    data: MediaPostCreateManyDocsLinkInput | MediaPostCreateManyDocsLinkInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDocsLinksInput = {
    update: XOR<UserUpdateWithoutDocsLinksInput, UserUncheckedUpdateWithoutDocsLinksInput>
    create: XOR<UserCreateWithoutDocsLinksInput, UserUncheckedCreateWithoutDocsLinksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDocsLinksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDocsLinksInput, UserUncheckedUpdateWithoutDocsLinksInput>
  }

  export type UserUpdateWithoutDocsLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumERoleFieldUpdateOperationsInput | $Enums.ERole
    password?: StringFieldUpdateOperationsInput | string
    contactNo?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    campaigns?: CampaignUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDocsLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumERoleFieldUpdateOperationsInput | $Enums.ERole
    password?: StringFieldUpdateOperationsInput | string
    contactNo?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    campaigns?: CampaignUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type MediaPostUpsertWithWhereUniqueWithoutDocsLinkInput = {
    where: MediaPostWhereUniqueInput
    update: XOR<MediaPostUpdateWithoutDocsLinkInput, MediaPostUncheckedUpdateWithoutDocsLinkInput>
    create: XOR<MediaPostCreateWithoutDocsLinkInput, MediaPostUncheckedCreateWithoutDocsLinkInput>
  }

  export type MediaPostUpdateWithWhereUniqueWithoutDocsLinkInput = {
    where: MediaPostWhereUniqueInput
    data: XOR<MediaPostUpdateWithoutDocsLinkInput, MediaPostUncheckedUpdateWithoutDocsLinkInput>
  }

  export type MediaPostUpdateManyWithWhereWithoutDocsLinkInput = {
    where: MediaPostScalarWhereInput
    data: XOR<MediaPostUpdateManyMutationInput, MediaPostUncheckedUpdateManyWithoutDocsLinkInput>
  }

  export type MediaPostScalarWhereInput = {
    AND?: MediaPostScalarWhereInput | MediaPostScalarWhereInput[]
    OR?: MediaPostScalarWhereInput[]
    NOT?: MediaPostScalarWhereInput | MediaPostScalarWhereInput[]
    id?: StringFilter<"MediaPost"> | string
    heading?: StringFilter<"MediaPost"> | string
    body?: StringFilter<"MediaPost"> | string
    postTime?: DateTimeFilter<"MediaPost"> | Date | string
    status?: EnumEMediaPostStatusFilter<"MediaPost"> | $Enums.EMediaPostStatus
    docsLinkId?: StringFilter<"MediaPost"> | string
    createdAt?: DateTimeFilter<"MediaPost"> | Date | string
    updatedAt?: DateTimeFilter<"MediaPost"> | Date | string
  }

  export type LeadCreateWithoutIndustryInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    platform: $Enums.EPlatform
    platformUrl?: string | null
    profileUsername?: string | null
    followerCount?: number
    bio?: string | null
    imageUrl?: string | null
    website?: string | null
    totalScore?: number | null
    role?: string | null
    status?: $Enums.ELeadStatus
    gmailThreadId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: LocationCreateNestedOneWithoutLeadsInput
    campaign?: CampaignCreateNestedOneWithoutLeadsInput
    scrapingJob?: ScrapingJobCreateNestedOneWithoutLeadsInput
    outreachMessages?: OutreachMessageCreateNestedManyWithoutLeadInput
    meetings?: MeetingCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutIndustryInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    platform: $Enums.EPlatform
    platformUrl?: string | null
    profileUsername?: string | null
    followerCount?: number
    bio?: string | null
    imageUrl?: string | null
    website?: string | null
    totalScore?: number | null
    role?: string | null
    status?: $Enums.ELeadStatus
    locationId?: string | null
    campaignId?: string | null
    scrapingJobId?: string | null
    gmailThreadId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    outreachMessages?: OutreachMessageUncheckedCreateNestedManyWithoutLeadInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutIndustryInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutIndustryInput, LeadUncheckedCreateWithoutIndustryInput>
  }

  export type LeadCreateManyIndustryInputEnvelope = {
    data: LeadCreateManyIndustryInput | LeadCreateManyIndustryInput[]
    skipDuplicates?: boolean
  }

  export type CampaignCreateWithoutTargetIndustryInput = {
    id?: string
    name: string
    description?: string | null
    firstMessage?: string | null
    apifyDatasetId?: string | null
    status?: $Enums.ECampaignStatus
    platform?: $Enums.EPlatform
    location?: string | null
    industry?: string | null
    followerThreshold?: number
    specification?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    targetLocation?: LocationCreateNestedOneWithoutCampaignsInput
    createdBy: UserCreateNestedOneWithoutCampaignsInput
    leads?: LeadCreateNestedManyWithoutCampaignInput
    outreachMessages?: OutreachMessageCreateNestedManyWithoutCampaignInput
    scrapingJobs?: ScrapingJobCreateNestedManyWithoutCampaignInput
    meetings?: MeetingCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutTargetIndustryInput = {
    id?: string
    name: string
    description?: string | null
    firstMessage?: string | null
    apifyDatasetId?: string | null
    status?: $Enums.ECampaignStatus
    platform?: $Enums.EPlatform
    location?: string | null
    industry?: string | null
    followerThreshold?: number
    specification?: string | null
    targetLocationId?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutCampaignInput
    outreachMessages?: OutreachMessageUncheckedCreateNestedManyWithoutCampaignInput
    scrapingJobs?: ScrapingJobUncheckedCreateNestedManyWithoutCampaignInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutTargetIndustryInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutTargetIndustryInput, CampaignUncheckedCreateWithoutTargetIndustryInput>
  }

  export type CampaignCreateManyTargetIndustryInputEnvelope = {
    data: CampaignCreateManyTargetIndustryInput | CampaignCreateManyTargetIndustryInput[]
    skipDuplicates?: boolean
  }

  export type LeadUpsertWithWhereUniqueWithoutIndustryInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutIndustryInput, LeadUncheckedUpdateWithoutIndustryInput>
    create: XOR<LeadCreateWithoutIndustryInput, LeadUncheckedCreateWithoutIndustryInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutIndustryInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutIndustryInput, LeadUncheckedUpdateWithoutIndustryInput>
  }

  export type LeadUpdateManyWithWhereWithoutIndustryInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutIndustryInput>
  }

  export type CampaignUpsertWithWhereUniqueWithoutTargetIndustryInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutTargetIndustryInput, CampaignUncheckedUpdateWithoutTargetIndustryInput>
    create: XOR<CampaignCreateWithoutTargetIndustryInput, CampaignUncheckedCreateWithoutTargetIndustryInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutTargetIndustryInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutTargetIndustryInput, CampaignUncheckedUpdateWithoutTargetIndustryInput>
  }

  export type CampaignUpdateManyWithWhereWithoutTargetIndustryInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutTargetIndustryInput>
  }

  export type CampaignScalarWhereInput = {
    AND?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    OR?: CampaignScalarWhereInput[]
    NOT?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    id?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    description?: StringNullableFilter<"Campaign"> | string | null
    firstMessage?: StringNullableFilter<"Campaign"> | string | null
    apifyDatasetId?: StringNullableFilter<"Campaign"> | string | null
    status?: EnumECampaignStatusFilter<"Campaign"> | $Enums.ECampaignStatus
    platform?: EnumEPlatformFilter<"Campaign"> | $Enums.EPlatform
    location?: StringNullableFilter<"Campaign"> | string | null
    industry?: StringNullableFilter<"Campaign"> | string | null
    followerThreshold?: IntFilter<"Campaign"> | number
    specification?: StringNullableFilter<"Campaign"> | string | null
    targetIndustryId?: StringNullableFilter<"Campaign"> | string | null
    targetLocationId?: StringNullableFilter<"Campaign"> | string | null
    createdById?: StringFilter<"Campaign"> | string
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
  }

  export type IndustryCreateWithoutLeadsInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignCreateNestedManyWithoutTargetIndustryInput
  }

  export type IndustryUncheckedCreateWithoutLeadsInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTargetIndustryInput
  }

  export type IndustryCreateOrConnectWithoutLeadsInput = {
    where: IndustryWhereUniqueInput
    create: XOR<IndustryCreateWithoutLeadsInput, IndustryUncheckedCreateWithoutLeadsInput>
  }

  export type LocationCreateWithoutLeadsInput = {
    id?: string
    city: string
    state?: string | null
    country?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignCreateNestedManyWithoutTargetLocationInput
  }

  export type LocationUncheckedCreateWithoutLeadsInput = {
    id?: string
    city: string
    state?: string | null
    country?: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTargetLocationInput
  }

  export type LocationCreateOrConnectWithoutLeadsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutLeadsInput, LocationUncheckedCreateWithoutLeadsInput>
  }

  export type CampaignCreateWithoutLeadsInput = {
    id?: string
    name: string
    description?: string | null
    firstMessage?: string | null
    apifyDatasetId?: string | null
    status?: $Enums.ECampaignStatus
    platform?: $Enums.EPlatform
    location?: string | null
    industry?: string | null
    followerThreshold?: number
    specification?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    targetIndustry?: IndustryCreateNestedOneWithoutCampaignsInput
    targetLocation?: LocationCreateNestedOneWithoutCampaignsInput
    createdBy: UserCreateNestedOneWithoutCampaignsInput
    outreachMessages?: OutreachMessageCreateNestedManyWithoutCampaignInput
    scrapingJobs?: ScrapingJobCreateNestedManyWithoutCampaignInput
    meetings?: MeetingCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutLeadsInput = {
    id?: string
    name: string
    description?: string | null
    firstMessage?: string | null
    apifyDatasetId?: string | null
    status?: $Enums.ECampaignStatus
    platform?: $Enums.EPlatform
    location?: string | null
    industry?: string | null
    followerThreshold?: number
    specification?: string | null
    targetIndustryId?: string | null
    targetLocationId?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    outreachMessages?: OutreachMessageUncheckedCreateNestedManyWithoutCampaignInput
    scrapingJobs?: ScrapingJobUncheckedCreateNestedManyWithoutCampaignInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutLeadsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutLeadsInput, CampaignUncheckedCreateWithoutLeadsInput>
  }

  export type ScrapingJobCreateWithoutLeadsInput = {
    id?: string
    platform: $Enums.EPlatform
    status?: $Enums.EScrapingJobStatus
    targetQuery?: string | null
    leadsFound?: number
    leadsExtracted?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorLog?: string | null
    createdAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutScrapingJobsInput
  }

  export type ScrapingJobUncheckedCreateWithoutLeadsInput = {
    id?: string
    campaignId: string
    platform: $Enums.EPlatform
    status?: $Enums.EScrapingJobStatus
    targetQuery?: string | null
    leadsFound?: number
    leadsExtracted?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorLog?: string | null
    createdAt?: Date | string
  }

  export type ScrapingJobCreateOrConnectWithoutLeadsInput = {
    where: ScrapingJobWhereUniqueInput
    create: XOR<ScrapingJobCreateWithoutLeadsInput, ScrapingJobUncheckedCreateWithoutLeadsInput>
  }

  export type OutreachMessageCreateWithoutLeadInput = {
    id?: string
    type: $Enums.EOutreachType
    senderType?: $Enums.EMessageSender
    subject?: string | null
    body: string
    sentAt?: Date | string | null
    replyStatus?: $Enums.EReplyStatus
    replyContent?: string | null
    isFollowUp?: boolean
    followUpCount?: number
    gmailThreadId?: string | null
    createdAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutOutreachMessagesInput
  }

  export type OutreachMessageUncheckedCreateWithoutLeadInput = {
    id?: string
    campaignId: string
    type: $Enums.EOutreachType
    senderType?: $Enums.EMessageSender
    subject?: string | null
    body: string
    sentAt?: Date | string | null
    replyStatus?: $Enums.EReplyStatus
    replyContent?: string | null
    isFollowUp?: boolean
    followUpCount?: number
    gmailThreadId?: string | null
    createdAt?: Date | string
  }

  export type OutreachMessageCreateOrConnectWithoutLeadInput = {
    where: OutreachMessageWhereUniqueInput
    create: XOR<OutreachMessageCreateWithoutLeadInput, OutreachMessageUncheckedCreateWithoutLeadInput>
  }

  export type OutreachMessageCreateManyLeadInputEnvelope = {
    data: OutreachMessageCreateManyLeadInput | OutreachMessageCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type MeetingCreateWithoutLeadInput = {
    id?: string
    title: string
    startTime: Date | string
    endTime: Date | string
    meetingLink?: string | null
    status?: $Enums.EMeetingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign?: CampaignCreateNestedOneWithoutMeetingsInput
  }

  export type MeetingUncheckedCreateWithoutLeadInput = {
    id?: string
    title: string
    campaignId?: string | null
    startTime: Date | string
    endTime: Date | string
    meetingLink?: string | null
    status?: $Enums.EMeetingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingCreateOrConnectWithoutLeadInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutLeadInput, MeetingUncheckedCreateWithoutLeadInput>
  }

  export type MeetingCreateManyLeadInputEnvelope = {
    data: MeetingCreateManyLeadInput | MeetingCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type IndustryUpsertWithoutLeadsInput = {
    update: XOR<IndustryUpdateWithoutLeadsInput, IndustryUncheckedUpdateWithoutLeadsInput>
    create: XOR<IndustryCreateWithoutLeadsInput, IndustryUncheckedCreateWithoutLeadsInput>
    where?: IndustryWhereInput
  }

  export type IndustryUpdateToOneWithWhereWithoutLeadsInput = {
    where?: IndustryWhereInput
    data: XOR<IndustryUpdateWithoutLeadsInput, IndustryUncheckedUpdateWithoutLeadsInput>
  }

  export type IndustryUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUpdateManyWithoutTargetIndustryNestedInput
  }

  export type IndustryUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUncheckedUpdateManyWithoutTargetIndustryNestedInput
  }

  export type LocationUpsertWithoutLeadsInput = {
    update: XOR<LocationUpdateWithoutLeadsInput, LocationUncheckedUpdateWithoutLeadsInput>
    create: XOR<LocationCreateWithoutLeadsInput, LocationUncheckedCreateWithoutLeadsInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutLeadsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutLeadsInput, LocationUncheckedUpdateWithoutLeadsInput>
  }

  export type LocationUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUpdateManyWithoutTargetLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignUncheckedUpdateManyWithoutTargetLocationNestedInput
  }

  export type CampaignUpsertWithoutLeadsInput = {
    update: XOR<CampaignUpdateWithoutLeadsInput, CampaignUncheckedUpdateWithoutLeadsInput>
    create: XOR<CampaignCreateWithoutLeadsInput, CampaignUncheckedCreateWithoutLeadsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutLeadsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutLeadsInput, CampaignUncheckedUpdateWithoutLeadsInput>
  }

  export type CampaignUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessage?: NullableStringFieldUpdateOperationsInput | string | null
    apifyDatasetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumECampaignStatusFieldUpdateOperationsInput | $Enums.ECampaignStatus
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    location?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    followerThreshold?: IntFieldUpdateOperationsInput | number
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetIndustry?: IndustryUpdateOneWithoutCampaignsNestedInput
    targetLocation?: LocationUpdateOneWithoutCampaignsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    outreachMessages?: OutreachMessageUpdateManyWithoutCampaignNestedInput
    scrapingJobs?: ScrapingJobUpdateManyWithoutCampaignNestedInput
    meetings?: MeetingUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessage?: NullableStringFieldUpdateOperationsInput | string | null
    apifyDatasetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumECampaignStatusFieldUpdateOperationsInput | $Enums.ECampaignStatus
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    location?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    followerThreshold?: IntFieldUpdateOperationsInput | number
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    targetIndustryId?: NullableStringFieldUpdateOperationsInput | string | null
    targetLocationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outreachMessages?: OutreachMessageUncheckedUpdateManyWithoutCampaignNestedInput
    scrapingJobs?: ScrapingJobUncheckedUpdateManyWithoutCampaignNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type ScrapingJobUpsertWithoutLeadsInput = {
    update: XOR<ScrapingJobUpdateWithoutLeadsInput, ScrapingJobUncheckedUpdateWithoutLeadsInput>
    create: XOR<ScrapingJobCreateWithoutLeadsInput, ScrapingJobUncheckedCreateWithoutLeadsInput>
    where?: ScrapingJobWhereInput
  }

  export type ScrapingJobUpdateToOneWithWhereWithoutLeadsInput = {
    where?: ScrapingJobWhereInput
    data: XOR<ScrapingJobUpdateWithoutLeadsInput, ScrapingJobUncheckedUpdateWithoutLeadsInput>
  }

  export type ScrapingJobUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    status?: EnumEScrapingJobStatusFieldUpdateOperationsInput | $Enums.EScrapingJobStatus
    targetQuery?: NullableStringFieldUpdateOperationsInput | string | null
    leadsFound?: IntFieldUpdateOperationsInput | number
    leadsExtracted?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorLog?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutScrapingJobsNestedInput
  }

  export type ScrapingJobUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    status?: EnumEScrapingJobStatusFieldUpdateOperationsInput | $Enums.EScrapingJobStatus
    targetQuery?: NullableStringFieldUpdateOperationsInput | string | null
    leadsFound?: IntFieldUpdateOperationsInput | number
    leadsExtracted?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorLog?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutreachMessageUpsertWithWhereUniqueWithoutLeadInput = {
    where: OutreachMessageWhereUniqueInput
    update: XOR<OutreachMessageUpdateWithoutLeadInput, OutreachMessageUncheckedUpdateWithoutLeadInput>
    create: XOR<OutreachMessageCreateWithoutLeadInput, OutreachMessageUncheckedCreateWithoutLeadInput>
  }

  export type OutreachMessageUpdateWithWhereUniqueWithoutLeadInput = {
    where: OutreachMessageWhereUniqueInput
    data: XOR<OutreachMessageUpdateWithoutLeadInput, OutreachMessageUncheckedUpdateWithoutLeadInput>
  }

  export type OutreachMessageUpdateManyWithWhereWithoutLeadInput = {
    where: OutreachMessageScalarWhereInput
    data: XOR<OutreachMessageUpdateManyMutationInput, OutreachMessageUncheckedUpdateManyWithoutLeadInput>
  }

  export type MeetingUpsertWithWhereUniqueWithoutLeadInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutLeadInput, MeetingUncheckedUpdateWithoutLeadInput>
    create: XOR<MeetingCreateWithoutLeadInput, MeetingUncheckedCreateWithoutLeadInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutLeadInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutLeadInput, MeetingUncheckedUpdateWithoutLeadInput>
  }

  export type MeetingUpdateManyWithWhereWithoutLeadInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutLeadInput>
  }

  export type LeadCreateWithoutLocationInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    platform: $Enums.EPlatform
    platformUrl?: string | null
    profileUsername?: string | null
    followerCount?: number
    bio?: string | null
    imageUrl?: string | null
    website?: string | null
    totalScore?: number | null
    role?: string | null
    status?: $Enums.ELeadStatus
    gmailThreadId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industry?: IndustryCreateNestedOneWithoutLeadsInput
    campaign?: CampaignCreateNestedOneWithoutLeadsInput
    scrapingJob?: ScrapingJobCreateNestedOneWithoutLeadsInput
    outreachMessages?: OutreachMessageCreateNestedManyWithoutLeadInput
    meetings?: MeetingCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutLocationInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    platform: $Enums.EPlatform
    platformUrl?: string | null
    profileUsername?: string | null
    followerCount?: number
    bio?: string | null
    imageUrl?: string | null
    website?: string | null
    totalScore?: number | null
    role?: string | null
    status?: $Enums.ELeadStatus
    industryId?: string | null
    campaignId?: string | null
    scrapingJobId?: string | null
    gmailThreadId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    outreachMessages?: OutreachMessageUncheckedCreateNestedManyWithoutLeadInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutLocationInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutLocationInput, LeadUncheckedCreateWithoutLocationInput>
  }

  export type LeadCreateManyLocationInputEnvelope = {
    data: LeadCreateManyLocationInput | LeadCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type CampaignCreateWithoutTargetLocationInput = {
    id?: string
    name: string
    description?: string | null
    firstMessage?: string | null
    apifyDatasetId?: string | null
    status?: $Enums.ECampaignStatus
    platform?: $Enums.EPlatform
    location?: string | null
    industry?: string | null
    followerThreshold?: number
    specification?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    targetIndustry?: IndustryCreateNestedOneWithoutCampaignsInput
    createdBy: UserCreateNestedOneWithoutCampaignsInput
    leads?: LeadCreateNestedManyWithoutCampaignInput
    outreachMessages?: OutreachMessageCreateNestedManyWithoutCampaignInput
    scrapingJobs?: ScrapingJobCreateNestedManyWithoutCampaignInput
    meetings?: MeetingCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutTargetLocationInput = {
    id?: string
    name: string
    description?: string | null
    firstMessage?: string | null
    apifyDatasetId?: string | null
    status?: $Enums.ECampaignStatus
    platform?: $Enums.EPlatform
    location?: string | null
    industry?: string | null
    followerThreshold?: number
    specification?: string | null
    targetIndustryId?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutCampaignInput
    outreachMessages?: OutreachMessageUncheckedCreateNestedManyWithoutCampaignInput
    scrapingJobs?: ScrapingJobUncheckedCreateNestedManyWithoutCampaignInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutTargetLocationInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutTargetLocationInput, CampaignUncheckedCreateWithoutTargetLocationInput>
  }

  export type CampaignCreateManyTargetLocationInputEnvelope = {
    data: CampaignCreateManyTargetLocationInput | CampaignCreateManyTargetLocationInput[]
    skipDuplicates?: boolean
  }

  export type LeadUpsertWithWhereUniqueWithoutLocationInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutLocationInput, LeadUncheckedUpdateWithoutLocationInput>
    create: XOR<LeadCreateWithoutLocationInput, LeadUncheckedCreateWithoutLocationInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutLocationInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutLocationInput, LeadUncheckedUpdateWithoutLocationInput>
  }

  export type LeadUpdateManyWithWhereWithoutLocationInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutLocationInput>
  }

  export type CampaignUpsertWithWhereUniqueWithoutTargetLocationInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutTargetLocationInput, CampaignUncheckedUpdateWithoutTargetLocationInput>
    create: XOR<CampaignCreateWithoutTargetLocationInput, CampaignUncheckedCreateWithoutTargetLocationInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutTargetLocationInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutTargetLocationInput, CampaignUncheckedUpdateWithoutTargetLocationInput>
  }

  export type CampaignUpdateManyWithWhereWithoutTargetLocationInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutTargetLocationInput>
  }

  export type DocsLinkCreateWithoutPostsInput = {
    id?: string
    name: string
    projectName: string
    docsLink: string
    prompt?: string | null
    postGenerate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutDocsLinksInput
  }

  export type DocsLinkUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    projectName: string
    docsLink: string
    prompt?: string | null
    postGenerate?: number
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocsLinkCreateOrConnectWithoutPostsInput = {
    where: DocsLinkWhereUniqueInput
    create: XOR<DocsLinkCreateWithoutPostsInput, DocsLinkUncheckedCreateWithoutPostsInput>
  }

  export type DocsLinkUpsertWithoutPostsInput = {
    update: XOR<DocsLinkUpdateWithoutPostsInput, DocsLinkUncheckedUpdateWithoutPostsInput>
    create: XOR<DocsLinkCreateWithoutPostsInput, DocsLinkUncheckedCreateWithoutPostsInput>
    where?: DocsLinkWhereInput
  }

  export type DocsLinkUpdateToOneWithWhereWithoutPostsInput = {
    where?: DocsLinkWhereInput
    data: XOR<DocsLinkUpdateWithoutPostsInput, DocsLinkUncheckedUpdateWithoutPostsInput>
  }

  export type DocsLinkUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    docsLink?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    postGenerate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutDocsLinksNestedInput
  }

  export type DocsLinkUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    docsLink?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    postGenerate?: IntFieldUpdateOperationsInput | number
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateWithoutMeetingsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    platform: $Enums.EPlatform
    platformUrl?: string | null
    profileUsername?: string | null
    followerCount?: number
    bio?: string | null
    imageUrl?: string | null
    website?: string | null
    totalScore?: number | null
    role?: string | null
    status?: $Enums.ELeadStatus
    gmailThreadId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industry?: IndustryCreateNestedOneWithoutLeadsInput
    location?: LocationCreateNestedOneWithoutLeadsInput
    campaign?: CampaignCreateNestedOneWithoutLeadsInput
    scrapingJob?: ScrapingJobCreateNestedOneWithoutLeadsInput
    outreachMessages?: OutreachMessageCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutMeetingsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    platform: $Enums.EPlatform
    platformUrl?: string | null
    profileUsername?: string | null
    followerCount?: number
    bio?: string | null
    imageUrl?: string | null
    website?: string | null
    totalScore?: number | null
    role?: string | null
    status?: $Enums.ELeadStatus
    industryId?: string | null
    locationId?: string | null
    campaignId?: string | null
    scrapingJobId?: string | null
    gmailThreadId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    outreachMessages?: OutreachMessageUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutMeetingsInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutMeetingsInput, LeadUncheckedCreateWithoutMeetingsInput>
  }

  export type CampaignCreateWithoutMeetingsInput = {
    id?: string
    name: string
    description?: string | null
    firstMessage?: string | null
    apifyDatasetId?: string | null
    status?: $Enums.ECampaignStatus
    platform?: $Enums.EPlatform
    location?: string | null
    industry?: string | null
    followerThreshold?: number
    specification?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    targetIndustry?: IndustryCreateNestedOneWithoutCampaignsInput
    targetLocation?: LocationCreateNestedOneWithoutCampaignsInput
    createdBy: UserCreateNestedOneWithoutCampaignsInput
    leads?: LeadCreateNestedManyWithoutCampaignInput
    outreachMessages?: OutreachMessageCreateNestedManyWithoutCampaignInput
    scrapingJobs?: ScrapingJobCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutMeetingsInput = {
    id?: string
    name: string
    description?: string | null
    firstMessage?: string | null
    apifyDatasetId?: string | null
    status?: $Enums.ECampaignStatus
    platform?: $Enums.EPlatform
    location?: string | null
    industry?: string | null
    followerThreshold?: number
    specification?: string | null
    targetIndustryId?: string | null
    targetLocationId?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutCampaignInput
    outreachMessages?: OutreachMessageUncheckedCreateNestedManyWithoutCampaignInput
    scrapingJobs?: ScrapingJobUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutMeetingsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutMeetingsInput, CampaignUncheckedCreateWithoutMeetingsInput>
  }

  export type LeadUpsertWithoutMeetingsInput = {
    update: XOR<LeadUpdateWithoutMeetingsInput, LeadUncheckedUpdateWithoutMeetingsInput>
    create: XOR<LeadCreateWithoutMeetingsInput, LeadUncheckedCreateWithoutMeetingsInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutMeetingsInput, LeadUncheckedUpdateWithoutMeetingsInput>
  }

  export type LeadUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUsername?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumELeadStatusFieldUpdateOperationsInput | $Enums.ELeadStatus
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industry?: IndustryUpdateOneWithoutLeadsNestedInput
    location?: LocationUpdateOneWithoutLeadsNestedInput
    campaign?: CampaignUpdateOneWithoutLeadsNestedInput
    scrapingJob?: ScrapingJobUpdateOneWithoutLeadsNestedInput
    outreachMessages?: OutreachMessageUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUsername?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumELeadStatusFieldUpdateOperationsInput | $Enums.ELeadStatus
    industryId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    scrapingJobId?: NullableStringFieldUpdateOperationsInput | string | null
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outreachMessages?: OutreachMessageUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type CampaignUpsertWithoutMeetingsInput = {
    update: XOR<CampaignUpdateWithoutMeetingsInput, CampaignUncheckedUpdateWithoutMeetingsInput>
    create: XOR<CampaignCreateWithoutMeetingsInput, CampaignUncheckedCreateWithoutMeetingsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutMeetingsInput, CampaignUncheckedUpdateWithoutMeetingsInput>
  }

  export type CampaignUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessage?: NullableStringFieldUpdateOperationsInput | string | null
    apifyDatasetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumECampaignStatusFieldUpdateOperationsInput | $Enums.ECampaignStatus
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    location?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    followerThreshold?: IntFieldUpdateOperationsInput | number
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetIndustry?: IndustryUpdateOneWithoutCampaignsNestedInput
    targetLocation?: LocationUpdateOneWithoutCampaignsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    leads?: LeadUpdateManyWithoutCampaignNestedInput
    outreachMessages?: OutreachMessageUpdateManyWithoutCampaignNestedInput
    scrapingJobs?: ScrapingJobUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessage?: NullableStringFieldUpdateOperationsInput | string | null
    apifyDatasetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumECampaignStatusFieldUpdateOperationsInput | $Enums.ECampaignStatus
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    location?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    followerThreshold?: IntFieldUpdateOperationsInput | number
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    targetIndustryId?: NullableStringFieldUpdateOperationsInput | string | null
    targetLocationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutCampaignNestedInput
    outreachMessages?: OutreachMessageUncheckedUpdateManyWithoutCampaignNestedInput
    scrapingJobs?: ScrapingJobUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type LeadCreateWithoutOutreachMessagesInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    platform: $Enums.EPlatform
    platformUrl?: string | null
    profileUsername?: string | null
    followerCount?: number
    bio?: string | null
    imageUrl?: string | null
    website?: string | null
    totalScore?: number | null
    role?: string | null
    status?: $Enums.ELeadStatus
    gmailThreadId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industry?: IndustryCreateNestedOneWithoutLeadsInput
    location?: LocationCreateNestedOneWithoutLeadsInput
    campaign?: CampaignCreateNestedOneWithoutLeadsInput
    scrapingJob?: ScrapingJobCreateNestedOneWithoutLeadsInput
    meetings?: MeetingCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutOutreachMessagesInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    platform: $Enums.EPlatform
    platformUrl?: string | null
    profileUsername?: string | null
    followerCount?: number
    bio?: string | null
    imageUrl?: string | null
    website?: string | null
    totalScore?: number | null
    role?: string | null
    status?: $Enums.ELeadStatus
    industryId?: string | null
    locationId?: string | null
    campaignId?: string | null
    scrapingJobId?: string | null
    gmailThreadId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meetings?: MeetingUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutOutreachMessagesInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutOutreachMessagesInput, LeadUncheckedCreateWithoutOutreachMessagesInput>
  }

  export type CampaignCreateWithoutOutreachMessagesInput = {
    id?: string
    name: string
    description?: string | null
    firstMessage?: string | null
    apifyDatasetId?: string | null
    status?: $Enums.ECampaignStatus
    platform?: $Enums.EPlatform
    location?: string | null
    industry?: string | null
    followerThreshold?: number
    specification?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    targetIndustry?: IndustryCreateNestedOneWithoutCampaignsInput
    targetLocation?: LocationCreateNestedOneWithoutCampaignsInput
    createdBy: UserCreateNestedOneWithoutCampaignsInput
    leads?: LeadCreateNestedManyWithoutCampaignInput
    scrapingJobs?: ScrapingJobCreateNestedManyWithoutCampaignInput
    meetings?: MeetingCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutOutreachMessagesInput = {
    id?: string
    name: string
    description?: string | null
    firstMessage?: string | null
    apifyDatasetId?: string | null
    status?: $Enums.ECampaignStatus
    platform?: $Enums.EPlatform
    location?: string | null
    industry?: string | null
    followerThreshold?: number
    specification?: string | null
    targetIndustryId?: string | null
    targetLocationId?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutCampaignInput
    scrapingJobs?: ScrapingJobUncheckedCreateNestedManyWithoutCampaignInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutOutreachMessagesInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutOutreachMessagesInput, CampaignUncheckedCreateWithoutOutreachMessagesInput>
  }

  export type LeadUpsertWithoutOutreachMessagesInput = {
    update: XOR<LeadUpdateWithoutOutreachMessagesInput, LeadUncheckedUpdateWithoutOutreachMessagesInput>
    create: XOR<LeadCreateWithoutOutreachMessagesInput, LeadUncheckedCreateWithoutOutreachMessagesInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutOutreachMessagesInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutOutreachMessagesInput, LeadUncheckedUpdateWithoutOutreachMessagesInput>
  }

  export type LeadUpdateWithoutOutreachMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUsername?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumELeadStatusFieldUpdateOperationsInput | $Enums.ELeadStatus
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industry?: IndustryUpdateOneWithoutLeadsNestedInput
    location?: LocationUpdateOneWithoutLeadsNestedInput
    campaign?: CampaignUpdateOneWithoutLeadsNestedInput
    scrapingJob?: ScrapingJobUpdateOneWithoutLeadsNestedInput
    meetings?: MeetingUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutOutreachMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUsername?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumELeadStatusFieldUpdateOperationsInput | $Enums.ELeadStatus
    industryId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    scrapingJobId?: NullableStringFieldUpdateOperationsInput | string | null
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: MeetingUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type CampaignUpsertWithoutOutreachMessagesInput = {
    update: XOR<CampaignUpdateWithoutOutreachMessagesInput, CampaignUncheckedUpdateWithoutOutreachMessagesInput>
    create: XOR<CampaignCreateWithoutOutreachMessagesInput, CampaignUncheckedCreateWithoutOutreachMessagesInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutOutreachMessagesInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutOutreachMessagesInput, CampaignUncheckedUpdateWithoutOutreachMessagesInput>
  }

  export type CampaignUpdateWithoutOutreachMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessage?: NullableStringFieldUpdateOperationsInput | string | null
    apifyDatasetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumECampaignStatusFieldUpdateOperationsInput | $Enums.ECampaignStatus
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    location?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    followerThreshold?: IntFieldUpdateOperationsInput | number
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetIndustry?: IndustryUpdateOneWithoutCampaignsNestedInput
    targetLocation?: LocationUpdateOneWithoutCampaignsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    leads?: LeadUpdateManyWithoutCampaignNestedInput
    scrapingJobs?: ScrapingJobUpdateManyWithoutCampaignNestedInput
    meetings?: MeetingUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutOutreachMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessage?: NullableStringFieldUpdateOperationsInput | string | null
    apifyDatasetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumECampaignStatusFieldUpdateOperationsInput | $Enums.ECampaignStatus
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    location?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    followerThreshold?: IntFieldUpdateOperationsInput | number
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    targetIndustryId?: NullableStringFieldUpdateOperationsInput | string | null
    targetLocationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutCampaignNestedInput
    scrapingJobs?: ScrapingJobUncheckedUpdateManyWithoutCampaignNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateWithoutScrapingJobsInput = {
    id?: string
    name: string
    description?: string | null
    firstMessage?: string | null
    apifyDatasetId?: string | null
    status?: $Enums.ECampaignStatus
    platform?: $Enums.EPlatform
    location?: string | null
    industry?: string | null
    followerThreshold?: number
    specification?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    targetIndustry?: IndustryCreateNestedOneWithoutCampaignsInput
    targetLocation?: LocationCreateNestedOneWithoutCampaignsInput
    createdBy: UserCreateNestedOneWithoutCampaignsInput
    leads?: LeadCreateNestedManyWithoutCampaignInput
    outreachMessages?: OutreachMessageCreateNestedManyWithoutCampaignInput
    meetings?: MeetingCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutScrapingJobsInput = {
    id?: string
    name: string
    description?: string | null
    firstMessage?: string | null
    apifyDatasetId?: string | null
    status?: $Enums.ECampaignStatus
    platform?: $Enums.EPlatform
    location?: string | null
    industry?: string | null
    followerThreshold?: number
    specification?: string | null
    targetIndustryId?: string | null
    targetLocationId?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutCampaignInput
    outreachMessages?: OutreachMessageUncheckedCreateNestedManyWithoutCampaignInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutScrapingJobsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutScrapingJobsInput, CampaignUncheckedCreateWithoutScrapingJobsInput>
  }

  export type LeadCreateWithoutScrapingJobInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    platform: $Enums.EPlatform
    platformUrl?: string | null
    profileUsername?: string | null
    followerCount?: number
    bio?: string | null
    imageUrl?: string | null
    website?: string | null
    totalScore?: number | null
    role?: string | null
    status?: $Enums.ELeadStatus
    gmailThreadId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    industry?: IndustryCreateNestedOneWithoutLeadsInput
    location?: LocationCreateNestedOneWithoutLeadsInput
    campaign?: CampaignCreateNestedOneWithoutLeadsInput
    outreachMessages?: OutreachMessageCreateNestedManyWithoutLeadInput
    meetings?: MeetingCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutScrapingJobInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    platform: $Enums.EPlatform
    platformUrl?: string | null
    profileUsername?: string | null
    followerCount?: number
    bio?: string | null
    imageUrl?: string | null
    website?: string | null
    totalScore?: number | null
    role?: string | null
    status?: $Enums.ELeadStatus
    industryId?: string | null
    locationId?: string | null
    campaignId?: string | null
    gmailThreadId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    outreachMessages?: OutreachMessageUncheckedCreateNestedManyWithoutLeadInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutScrapingJobInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutScrapingJobInput, LeadUncheckedCreateWithoutScrapingJobInput>
  }

  export type LeadCreateManyScrapingJobInputEnvelope = {
    data: LeadCreateManyScrapingJobInput | LeadCreateManyScrapingJobInput[]
    skipDuplicates?: boolean
  }

  export type CampaignUpsertWithoutScrapingJobsInput = {
    update: XOR<CampaignUpdateWithoutScrapingJobsInput, CampaignUncheckedUpdateWithoutScrapingJobsInput>
    create: XOR<CampaignCreateWithoutScrapingJobsInput, CampaignUncheckedCreateWithoutScrapingJobsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutScrapingJobsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutScrapingJobsInput, CampaignUncheckedUpdateWithoutScrapingJobsInput>
  }

  export type CampaignUpdateWithoutScrapingJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessage?: NullableStringFieldUpdateOperationsInput | string | null
    apifyDatasetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumECampaignStatusFieldUpdateOperationsInput | $Enums.ECampaignStatus
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    location?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    followerThreshold?: IntFieldUpdateOperationsInput | number
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetIndustry?: IndustryUpdateOneWithoutCampaignsNestedInput
    targetLocation?: LocationUpdateOneWithoutCampaignsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    leads?: LeadUpdateManyWithoutCampaignNestedInput
    outreachMessages?: OutreachMessageUpdateManyWithoutCampaignNestedInput
    meetings?: MeetingUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutScrapingJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessage?: NullableStringFieldUpdateOperationsInput | string | null
    apifyDatasetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumECampaignStatusFieldUpdateOperationsInput | $Enums.ECampaignStatus
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    location?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    followerThreshold?: IntFieldUpdateOperationsInput | number
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    targetIndustryId?: NullableStringFieldUpdateOperationsInput | string | null
    targetLocationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutCampaignNestedInput
    outreachMessages?: OutreachMessageUncheckedUpdateManyWithoutCampaignNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type LeadUpsertWithWhereUniqueWithoutScrapingJobInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutScrapingJobInput, LeadUncheckedUpdateWithoutScrapingJobInput>
    create: XOR<LeadCreateWithoutScrapingJobInput, LeadUncheckedCreateWithoutScrapingJobInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutScrapingJobInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutScrapingJobInput, LeadUncheckedUpdateWithoutScrapingJobInput>
  }

  export type LeadUpdateManyWithWhereWithoutScrapingJobInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutScrapingJobInput>
  }

  export type CampaignCreateWithoutCreatedByInput = {
    id?: string
    name: string
    description?: string | null
    firstMessage?: string | null
    apifyDatasetId?: string | null
    status?: $Enums.ECampaignStatus
    platform?: $Enums.EPlatform
    location?: string | null
    industry?: string | null
    followerThreshold?: number
    specification?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    targetIndustry?: IndustryCreateNestedOneWithoutCampaignsInput
    targetLocation?: LocationCreateNestedOneWithoutCampaignsInput
    leads?: LeadCreateNestedManyWithoutCampaignInput
    outreachMessages?: OutreachMessageCreateNestedManyWithoutCampaignInput
    scrapingJobs?: ScrapingJobCreateNestedManyWithoutCampaignInput
    meetings?: MeetingCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    description?: string | null
    firstMessage?: string | null
    apifyDatasetId?: string | null
    status?: $Enums.ECampaignStatus
    platform?: $Enums.EPlatform
    location?: string | null
    industry?: string | null
    followerThreshold?: number
    specification?: string | null
    targetIndustryId?: string | null
    targetLocationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutCampaignInput
    outreachMessages?: OutreachMessageUncheckedCreateNestedManyWithoutCampaignInput
    scrapingJobs?: ScrapingJobUncheckedCreateNestedManyWithoutCampaignInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutCreatedByInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutCreatedByInput, CampaignUncheckedCreateWithoutCreatedByInput>
  }

  export type CampaignCreateManyCreatedByInputEnvelope = {
    data: CampaignCreateManyCreatedByInput | CampaignCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type DocsLinkCreateWithoutCreatedByInput = {
    id?: string
    name: string
    projectName: string
    docsLink: string
    prompt?: string | null
    postGenerate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: MediaPostCreateNestedManyWithoutDocsLinkInput
  }

  export type DocsLinkUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    projectName: string
    docsLink: string
    prompt?: string | null
    postGenerate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: MediaPostUncheckedCreateNestedManyWithoutDocsLinkInput
  }

  export type DocsLinkCreateOrConnectWithoutCreatedByInput = {
    where: DocsLinkWhereUniqueInput
    create: XOR<DocsLinkCreateWithoutCreatedByInput, DocsLinkUncheckedCreateWithoutCreatedByInput>
  }

  export type DocsLinkCreateManyCreatedByInputEnvelope = {
    data: DocsLinkCreateManyCreatedByInput | DocsLinkCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type CampaignUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutCreatedByInput, CampaignUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CampaignCreateWithoutCreatedByInput, CampaignUncheckedCreateWithoutCreatedByInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutCreatedByInput, CampaignUncheckedUpdateWithoutCreatedByInput>
  }

  export type CampaignUpdateManyWithWhereWithoutCreatedByInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type DocsLinkUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: DocsLinkWhereUniqueInput
    update: XOR<DocsLinkUpdateWithoutCreatedByInput, DocsLinkUncheckedUpdateWithoutCreatedByInput>
    create: XOR<DocsLinkCreateWithoutCreatedByInput, DocsLinkUncheckedCreateWithoutCreatedByInput>
  }

  export type DocsLinkUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: DocsLinkWhereUniqueInput
    data: XOR<DocsLinkUpdateWithoutCreatedByInput, DocsLinkUncheckedUpdateWithoutCreatedByInput>
  }

  export type DocsLinkUpdateManyWithWhereWithoutCreatedByInput = {
    where: DocsLinkScalarWhereInput
    data: XOR<DocsLinkUpdateManyMutationInput, DocsLinkUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type DocsLinkScalarWhereInput = {
    AND?: DocsLinkScalarWhereInput | DocsLinkScalarWhereInput[]
    OR?: DocsLinkScalarWhereInput[]
    NOT?: DocsLinkScalarWhereInput | DocsLinkScalarWhereInput[]
    id?: StringFilter<"DocsLink"> | string
    name?: StringFilter<"DocsLink"> | string
    projectName?: StringFilter<"DocsLink"> | string
    docsLink?: StringFilter<"DocsLink"> | string
    prompt?: StringNullableFilter<"DocsLink"> | string | null
    postGenerate?: IntFilter<"DocsLink"> | number
    createdById?: StringFilter<"DocsLink"> | string
    createdAt?: DateTimeFilter<"DocsLink"> | Date | string
    updatedAt?: DateTimeFilter<"DocsLink"> | Date | string
  }

  export type LeadCreateManyCampaignInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    platform: $Enums.EPlatform
    platformUrl?: string | null
    profileUsername?: string | null
    followerCount?: number
    bio?: string | null
    imageUrl?: string | null
    website?: string | null
    totalScore?: number | null
    role?: string | null
    status?: $Enums.ELeadStatus
    industryId?: string | null
    locationId?: string | null
    scrapingJobId?: string | null
    gmailThreadId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutreachMessageCreateManyCampaignInput = {
    id?: string
    leadId: string
    type: $Enums.EOutreachType
    senderType?: $Enums.EMessageSender
    subject?: string | null
    body: string
    sentAt?: Date | string | null
    replyStatus?: $Enums.EReplyStatus
    replyContent?: string | null
    isFollowUp?: boolean
    followUpCount?: number
    gmailThreadId?: string | null
    createdAt?: Date | string
  }

  export type ScrapingJobCreateManyCampaignInput = {
    id?: string
    platform: $Enums.EPlatform
    status?: $Enums.EScrapingJobStatus
    targetQuery?: string | null
    leadsFound?: number
    leadsExtracted?: number
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    errorLog?: string | null
    createdAt?: Date | string
  }

  export type MeetingCreateManyCampaignInput = {
    id?: string
    title: string
    leadId: string
    startTime: Date | string
    endTime: Date | string
    meetingLink?: string | null
    status?: $Enums.EMeetingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUsername?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumELeadStatusFieldUpdateOperationsInput | $Enums.ELeadStatus
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industry?: IndustryUpdateOneWithoutLeadsNestedInput
    location?: LocationUpdateOneWithoutLeadsNestedInput
    scrapingJob?: ScrapingJobUpdateOneWithoutLeadsNestedInput
    outreachMessages?: OutreachMessageUpdateManyWithoutLeadNestedInput
    meetings?: MeetingUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUsername?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumELeadStatusFieldUpdateOperationsInput | $Enums.ELeadStatus
    industryId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    scrapingJobId?: NullableStringFieldUpdateOperationsInput | string | null
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outreachMessages?: OutreachMessageUncheckedUpdateManyWithoutLeadNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUsername?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumELeadStatusFieldUpdateOperationsInput | $Enums.ELeadStatus
    industryId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    scrapingJobId?: NullableStringFieldUpdateOperationsInput | string | null
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutreachMessageUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEOutreachTypeFieldUpdateOperationsInput | $Enums.EOutreachType
    senderType?: EnumEMessageSenderFieldUpdateOperationsInput | $Enums.EMessageSender
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyStatus?: EnumEReplyStatusFieldUpdateOperationsInput | $Enums.EReplyStatus
    replyContent?: NullableStringFieldUpdateOperationsInput | string | null
    isFollowUp?: BoolFieldUpdateOperationsInput | boolean
    followUpCount?: IntFieldUpdateOperationsInput | number
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: LeadUpdateOneRequiredWithoutOutreachMessagesNestedInput
  }

  export type OutreachMessageUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    type?: EnumEOutreachTypeFieldUpdateOperationsInput | $Enums.EOutreachType
    senderType?: EnumEMessageSenderFieldUpdateOperationsInput | $Enums.EMessageSender
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyStatus?: EnumEReplyStatusFieldUpdateOperationsInput | $Enums.EReplyStatus
    replyContent?: NullableStringFieldUpdateOperationsInput | string | null
    isFollowUp?: BoolFieldUpdateOperationsInput | boolean
    followUpCount?: IntFieldUpdateOperationsInput | number
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutreachMessageUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    type?: EnumEOutreachTypeFieldUpdateOperationsInput | $Enums.EOutreachType
    senderType?: EnumEMessageSenderFieldUpdateOperationsInput | $Enums.EMessageSender
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyStatus?: EnumEReplyStatusFieldUpdateOperationsInput | $Enums.EReplyStatus
    replyContent?: NullableStringFieldUpdateOperationsInput | string | null
    isFollowUp?: BoolFieldUpdateOperationsInput | boolean
    followUpCount?: IntFieldUpdateOperationsInput | number
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapingJobUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    status?: EnumEScrapingJobStatusFieldUpdateOperationsInput | $Enums.EScrapingJobStatus
    targetQuery?: NullableStringFieldUpdateOperationsInput | string | null
    leadsFound?: IntFieldUpdateOperationsInput | number
    leadsExtracted?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorLog?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutScrapingJobNestedInput
  }

  export type ScrapingJobUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    status?: EnumEScrapingJobStatusFieldUpdateOperationsInput | $Enums.EScrapingJobStatus
    targetQuery?: NullableStringFieldUpdateOperationsInput | string | null
    leadsFound?: IntFieldUpdateOperationsInput | number
    leadsExtracted?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorLog?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutScrapingJobNestedInput
  }

  export type ScrapingJobUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    status?: EnumEScrapingJobStatusFieldUpdateOperationsInput | $Enums.EScrapingJobStatus
    targetQuery?: NullableStringFieldUpdateOperationsInput | string | null
    leadsFound?: IntFieldUpdateOperationsInput | number
    leadsExtracted?: IntFieldUpdateOperationsInput | number
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorLog?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEMeetingStatusFieldUpdateOperationsInput | $Enums.EMeetingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: LeadUpdateOneRequiredWithoutMeetingsNestedInput
  }

  export type MeetingUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEMeetingStatusFieldUpdateOperationsInput | $Enums.EMeetingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEMeetingStatusFieldUpdateOperationsInput | $Enums.EMeetingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaPostCreateManyDocsLinkInput = {
    id?: string
    heading: string
    body: string
    postTime?: Date | string
    status?: $Enums.EMediaPostStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaPostUpdateWithoutDocsLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    postTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEMediaPostStatusFieldUpdateOperationsInput | $Enums.EMediaPostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaPostUncheckedUpdateWithoutDocsLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    postTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEMediaPostStatusFieldUpdateOperationsInput | $Enums.EMediaPostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaPostUncheckedUpdateManyWithoutDocsLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    heading?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    postTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEMediaPostStatusFieldUpdateOperationsInput | $Enums.EMediaPostStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateManyIndustryInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    platform: $Enums.EPlatform
    platformUrl?: string | null
    profileUsername?: string | null
    followerCount?: number
    bio?: string | null
    imageUrl?: string | null
    website?: string | null
    totalScore?: number | null
    role?: string | null
    status?: $Enums.ELeadStatus
    locationId?: string | null
    campaignId?: string | null
    scrapingJobId?: string | null
    gmailThreadId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCreateManyTargetIndustryInput = {
    id?: string
    name: string
    description?: string | null
    firstMessage?: string | null
    apifyDatasetId?: string | null
    status?: $Enums.ECampaignStatus
    platform?: $Enums.EPlatform
    location?: string | null
    industry?: string | null
    followerThreshold?: number
    specification?: string | null
    targetLocationId?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadUpdateWithoutIndustryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUsername?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumELeadStatusFieldUpdateOperationsInput | $Enums.ELeadStatus
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneWithoutLeadsNestedInput
    campaign?: CampaignUpdateOneWithoutLeadsNestedInput
    scrapingJob?: ScrapingJobUpdateOneWithoutLeadsNestedInput
    outreachMessages?: OutreachMessageUpdateManyWithoutLeadNestedInput
    meetings?: MeetingUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutIndustryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUsername?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumELeadStatusFieldUpdateOperationsInput | $Enums.ELeadStatus
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    scrapingJobId?: NullableStringFieldUpdateOperationsInput | string | null
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outreachMessages?: OutreachMessageUncheckedUpdateManyWithoutLeadNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutIndustryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUsername?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumELeadStatusFieldUpdateOperationsInput | $Enums.ELeadStatus
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    scrapingJobId?: NullableStringFieldUpdateOperationsInput | string | null
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUpdateWithoutTargetIndustryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessage?: NullableStringFieldUpdateOperationsInput | string | null
    apifyDatasetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumECampaignStatusFieldUpdateOperationsInput | $Enums.ECampaignStatus
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    location?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    followerThreshold?: IntFieldUpdateOperationsInput | number
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetLocation?: LocationUpdateOneWithoutCampaignsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    leads?: LeadUpdateManyWithoutCampaignNestedInput
    outreachMessages?: OutreachMessageUpdateManyWithoutCampaignNestedInput
    scrapingJobs?: ScrapingJobUpdateManyWithoutCampaignNestedInput
    meetings?: MeetingUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutTargetIndustryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessage?: NullableStringFieldUpdateOperationsInput | string | null
    apifyDatasetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumECampaignStatusFieldUpdateOperationsInput | $Enums.ECampaignStatus
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    location?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    followerThreshold?: IntFieldUpdateOperationsInput | number
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    targetLocationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutCampaignNestedInput
    outreachMessages?: OutreachMessageUncheckedUpdateManyWithoutCampaignNestedInput
    scrapingJobs?: ScrapingJobUncheckedUpdateManyWithoutCampaignNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutTargetIndustryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessage?: NullableStringFieldUpdateOperationsInput | string | null
    apifyDatasetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumECampaignStatusFieldUpdateOperationsInput | $Enums.ECampaignStatus
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    location?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    followerThreshold?: IntFieldUpdateOperationsInput | number
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    targetLocationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutreachMessageCreateManyLeadInput = {
    id?: string
    campaignId: string
    type: $Enums.EOutreachType
    senderType?: $Enums.EMessageSender
    subject?: string | null
    body: string
    sentAt?: Date | string | null
    replyStatus?: $Enums.EReplyStatus
    replyContent?: string | null
    isFollowUp?: boolean
    followUpCount?: number
    gmailThreadId?: string | null
    createdAt?: Date | string
  }

  export type MeetingCreateManyLeadInput = {
    id?: string
    title: string
    campaignId?: string | null
    startTime: Date | string
    endTime: Date | string
    meetingLink?: string | null
    status?: $Enums.EMeetingStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutreachMessageUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEOutreachTypeFieldUpdateOperationsInput | $Enums.EOutreachType
    senderType?: EnumEMessageSenderFieldUpdateOperationsInput | $Enums.EMessageSender
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyStatus?: EnumEReplyStatusFieldUpdateOperationsInput | $Enums.EReplyStatus
    replyContent?: NullableStringFieldUpdateOperationsInput | string | null
    isFollowUp?: BoolFieldUpdateOperationsInput | boolean
    followUpCount?: IntFieldUpdateOperationsInput | number
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutOutreachMessagesNestedInput
  }

  export type OutreachMessageUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    type?: EnumEOutreachTypeFieldUpdateOperationsInput | $Enums.EOutreachType
    senderType?: EnumEMessageSenderFieldUpdateOperationsInput | $Enums.EMessageSender
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyStatus?: EnumEReplyStatusFieldUpdateOperationsInput | $Enums.EReplyStatus
    replyContent?: NullableStringFieldUpdateOperationsInput | string | null
    isFollowUp?: BoolFieldUpdateOperationsInput | boolean
    followUpCount?: IntFieldUpdateOperationsInput | number
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutreachMessageUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    type?: EnumEOutreachTypeFieldUpdateOperationsInput | $Enums.EOutreachType
    senderType?: EnumEMessageSenderFieldUpdateOperationsInput | $Enums.EMessageSender
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    body?: StringFieldUpdateOperationsInput | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyStatus?: EnumEReplyStatusFieldUpdateOperationsInput | $Enums.EReplyStatus
    replyContent?: NullableStringFieldUpdateOperationsInput | string | null
    isFollowUp?: BoolFieldUpdateOperationsInput | boolean
    followUpCount?: IntFieldUpdateOperationsInput | number
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEMeetingStatusFieldUpdateOperationsInput | $Enums.EMeetingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneWithoutMeetingsNestedInput
  }

  export type MeetingUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEMeetingStatusFieldUpdateOperationsInput | $Enums.EMeetingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingLink?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEMeetingStatusFieldUpdateOperationsInput | $Enums.EMeetingStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateManyLocationInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    platform: $Enums.EPlatform
    platformUrl?: string | null
    profileUsername?: string | null
    followerCount?: number
    bio?: string | null
    imageUrl?: string | null
    website?: string | null
    totalScore?: number | null
    role?: string | null
    status?: $Enums.ELeadStatus
    industryId?: string | null
    campaignId?: string | null
    scrapingJobId?: string | null
    gmailThreadId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCreateManyTargetLocationInput = {
    id?: string
    name: string
    description?: string | null
    firstMessage?: string | null
    apifyDatasetId?: string | null
    status?: $Enums.ECampaignStatus
    platform?: $Enums.EPlatform
    location?: string | null
    industry?: string | null
    followerThreshold?: number
    specification?: string | null
    targetIndustryId?: string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUsername?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumELeadStatusFieldUpdateOperationsInput | $Enums.ELeadStatus
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industry?: IndustryUpdateOneWithoutLeadsNestedInput
    campaign?: CampaignUpdateOneWithoutLeadsNestedInput
    scrapingJob?: ScrapingJobUpdateOneWithoutLeadsNestedInput
    outreachMessages?: OutreachMessageUpdateManyWithoutLeadNestedInput
    meetings?: MeetingUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUsername?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumELeadStatusFieldUpdateOperationsInput | $Enums.ELeadStatus
    industryId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    scrapingJobId?: NullableStringFieldUpdateOperationsInput | string | null
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outreachMessages?: OutreachMessageUncheckedUpdateManyWithoutLeadNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUsername?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumELeadStatusFieldUpdateOperationsInput | $Enums.ELeadStatus
    industryId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    scrapingJobId?: NullableStringFieldUpdateOperationsInput | string | null
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUpdateWithoutTargetLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessage?: NullableStringFieldUpdateOperationsInput | string | null
    apifyDatasetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumECampaignStatusFieldUpdateOperationsInput | $Enums.ECampaignStatus
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    location?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    followerThreshold?: IntFieldUpdateOperationsInput | number
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetIndustry?: IndustryUpdateOneWithoutCampaignsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCampaignsNestedInput
    leads?: LeadUpdateManyWithoutCampaignNestedInput
    outreachMessages?: OutreachMessageUpdateManyWithoutCampaignNestedInput
    scrapingJobs?: ScrapingJobUpdateManyWithoutCampaignNestedInput
    meetings?: MeetingUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutTargetLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessage?: NullableStringFieldUpdateOperationsInput | string | null
    apifyDatasetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumECampaignStatusFieldUpdateOperationsInput | $Enums.ECampaignStatus
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    location?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    followerThreshold?: IntFieldUpdateOperationsInput | number
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    targetIndustryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutCampaignNestedInput
    outreachMessages?: OutreachMessageUncheckedUpdateManyWithoutCampaignNestedInput
    scrapingJobs?: ScrapingJobUncheckedUpdateManyWithoutCampaignNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutTargetLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessage?: NullableStringFieldUpdateOperationsInput | string | null
    apifyDatasetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumECampaignStatusFieldUpdateOperationsInput | $Enums.ECampaignStatus
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    location?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    followerThreshold?: IntFieldUpdateOperationsInput | number
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    targetIndustryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateManyScrapingJobInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    platform: $Enums.EPlatform
    platformUrl?: string | null
    profileUsername?: string | null
    followerCount?: number
    bio?: string | null
    imageUrl?: string | null
    website?: string | null
    totalScore?: number | null
    role?: string | null
    status?: $Enums.ELeadStatus
    industryId?: string | null
    locationId?: string | null
    campaignId?: string | null
    gmailThreadId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeadUpdateWithoutScrapingJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUsername?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumELeadStatusFieldUpdateOperationsInput | $Enums.ELeadStatus
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    industry?: IndustryUpdateOneWithoutLeadsNestedInput
    location?: LocationUpdateOneWithoutLeadsNestedInput
    campaign?: CampaignUpdateOneWithoutLeadsNestedInput
    outreachMessages?: OutreachMessageUpdateManyWithoutLeadNestedInput
    meetings?: MeetingUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutScrapingJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUsername?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumELeadStatusFieldUpdateOperationsInput | $Enums.ELeadStatus
    industryId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outreachMessages?: OutreachMessageUncheckedUpdateManyWithoutLeadNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutScrapingJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileUsername?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    totalScore?: NullableFloatFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumELeadStatusFieldUpdateOperationsInput | $Enums.ELeadStatus
    industryId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    campaignId?: NullableStringFieldUpdateOperationsInput | string | null
    gmailThreadId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateManyCreatedByInput = {
    id?: string
    name: string
    description?: string | null
    firstMessage?: string | null
    apifyDatasetId?: string | null
    status?: $Enums.ECampaignStatus
    platform?: $Enums.EPlatform
    location?: string | null
    industry?: string | null
    followerThreshold?: number
    specification?: string | null
    targetIndustryId?: string | null
    targetLocationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocsLinkCreateManyCreatedByInput = {
    id?: string
    name: string
    projectName: string
    docsLink: string
    prompt?: string | null
    postGenerate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessage?: NullableStringFieldUpdateOperationsInput | string | null
    apifyDatasetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumECampaignStatusFieldUpdateOperationsInput | $Enums.ECampaignStatus
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    location?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    followerThreshold?: IntFieldUpdateOperationsInput | number
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetIndustry?: IndustryUpdateOneWithoutCampaignsNestedInput
    targetLocation?: LocationUpdateOneWithoutCampaignsNestedInput
    leads?: LeadUpdateManyWithoutCampaignNestedInput
    outreachMessages?: OutreachMessageUpdateManyWithoutCampaignNestedInput
    scrapingJobs?: ScrapingJobUpdateManyWithoutCampaignNestedInput
    meetings?: MeetingUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessage?: NullableStringFieldUpdateOperationsInput | string | null
    apifyDatasetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumECampaignStatusFieldUpdateOperationsInput | $Enums.ECampaignStatus
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    location?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    followerThreshold?: IntFieldUpdateOperationsInput | number
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    targetIndustryId?: NullableStringFieldUpdateOperationsInput | string | null
    targetLocationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutCampaignNestedInput
    outreachMessages?: OutreachMessageUncheckedUpdateManyWithoutCampaignNestedInput
    scrapingJobs?: ScrapingJobUncheckedUpdateManyWithoutCampaignNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    firstMessage?: NullableStringFieldUpdateOperationsInput | string | null
    apifyDatasetId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumECampaignStatusFieldUpdateOperationsInput | $Enums.ECampaignStatus
    platform?: EnumEPlatformFieldUpdateOperationsInput | $Enums.EPlatform
    location?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    followerThreshold?: IntFieldUpdateOperationsInput | number
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    targetIndustryId?: NullableStringFieldUpdateOperationsInput | string | null
    targetLocationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocsLinkUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    docsLink?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    postGenerate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: MediaPostUpdateManyWithoutDocsLinkNestedInput
  }

  export type DocsLinkUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    docsLink?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    postGenerate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: MediaPostUncheckedUpdateManyWithoutDocsLinkNestedInput
  }

  export type DocsLinkUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    docsLink?: StringFieldUpdateOperationsInput | string
    prompt?: NullableStringFieldUpdateOperationsInput | string | null
    postGenerate?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}