/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/state-tunnel';
import {
  DocumentNode,
} from 'graphql';
import {
  MutationFn,
  MutationRenderer,
  QueryRenderer,
  QueryResult,
  SubscriptionRenderer,
} from './utils/types';
import {
  ApolloClient,
  MutationOptions,
  SubscriptionOptions,
  WatchQueryOptions,
} from 'apollo-client';
import {
  EventEmitter,
} from '@stencil/core';


export namespace Components {

  interface ApolloMutation {
    'client': ApolloClient<any>;
    'mutation': DocumentNode;
    'options': MutationOptions;
    'renderer': MutationRenderer;
    'variables': any;
  }
  interface ApolloMutationAttributes extends StencilHTMLAttributes {
    'client'?: ApolloClient<any>;
    'mutation'?: DocumentNode;
    'onReady'?: (event: CustomEvent<MutationFn<any, any>>) => void;
    'options'?: MutationOptions;
    'renderer'?: MutationRenderer;
    'variables'?: any;
  }

  interface ApolloProvider {
    'client': ApolloClient<any>;
  }
  interface ApolloProviderAttributes extends StencilHTMLAttributes {
    'client'?: ApolloClient<any>;
  }

  interface ApolloQuery {
    'client': ApolloClient<any>;
    'options': WatchQueryOptions;
    'query': DocumentNode;
    'renderer': QueryRenderer<any>;
    'variables': any;
  }
  interface ApolloQueryAttributes extends StencilHTMLAttributes {
    'client'?: ApolloClient<any>;
    'onReady'?: (event: CustomEvent<QueryResult<any>>) => void;
    'onResult'?: (event: CustomEvent<QueryResult<any>>) => void;
    'options'?: WatchQueryOptions;
    'query'?: DocumentNode;
    'renderer'?: QueryRenderer<any>;
    'variables'?: any;
  }

  interface ApolloSubscription {
    'client': ApolloClient<any>;
    'options': SubscriptionOptions;
    'renderer': SubscriptionRenderer<any>;
    'subscription': DocumentNode;
    'variables': any;
  }
  interface ApolloSubscriptionAttributes extends StencilHTMLAttributes {
    'client'?: ApolloClient<any>;
    'onReady'?: (event: CustomEvent<any>) => void;
    'onResult'?: (event: CustomEvent<any>) => void;
    'options'?: SubscriptionOptions;
    'renderer'?: SubscriptionRenderer<any>;
    'subscription'?: DocumentNode;
    'variables'?: any;
  }
}

declare global {
  interface StencilElementInterfaces {
    'ApolloMutation': Components.ApolloMutation;
    'ApolloProvider': Components.ApolloProvider;
    'ApolloQuery': Components.ApolloQuery;
    'ApolloSubscription': Components.ApolloSubscription;
  }

  interface StencilIntrinsicElements {
    'apollo-mutation': Components.ApolloMutationAttributes;
    'apollo-provider': Components.ApolloProviderAttributes;
    'apollo-query': Components.ApolloQueryAttributes;
    'apollo-subscription': Components.ApolloSubscriptionAttributes;
  }


  interface HTMLApolloMutationElement extends Components.ApolloMutation, HTMLStencilElement {}
  var HTMLApolloMutationElement: {
    prototype: HTMLApolloMutationElement;
    new (): HTMLApolloMutationElement;
  };

  interface HTMLApolloProviderElement extends Components.ApolloProvider, HTMLStencilElement {}
  var HTMLApolloProviderElement: {
    prototype: HTMLApolloProviderElement;
    new (): HTMLApolloProviderElement;
  };

  interface HTMLApolloQueryElement extends Components.ApolloQuery, HTMLStencilElement {}
  var HTMLApolloQueryElement: {
    prototype: HTMLApolloQueryElement;
    new (): HTMLApolloQueryElement;
  };

  interface HTMLApolloSubscriptionElement extends Components.ApolloSubscription, HTMLStencilElement {}
  var HTMLApolloSubscriptionElement: {
    prototype: HTMLApolloSubscriptionElement;
    new (): HTMLApolloSubscriptionElement;
  };

  interface HTMLElementTagNameMap {
    'apollo-mutation': HTMLApolloMutationElement
    'apollo-provider': HTMLApolloProviderElement
    'apollo-query': HTMLApolloQueryElement
    'apollo-subscription': HTMLApolloSubscriptionElement
  }

  interface ElementTagNameMap {
    'apollo-mutation': HTMLApolloMutationElement;
    'apollo-provider': HTMLApolloProviderElement;
    'apollo-query': HTMLApolloQueryElement;
    'apollo-subscription': HTMLApolloSubscriptionElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
