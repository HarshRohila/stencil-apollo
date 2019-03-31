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
  OnMutationReadyFn,
} from './components/apollo-mutation/types';
import {
  ApolloClient,
  MutationOptions,
  SubscriptionOptions,
  WatchQueryOptions,
} from 'apollo-client';
import {
  OnQueryReadyFn,
} from './components/apollo-query/types';
import {
  OnSubscriptionReadyFn,
} from './components/apollo-subscription/types';


export namespace Components {

  interface ApolloMutation {
    'client': ApolloClient<any>;
    'mutation': DocumentNode;
    'onReady': OnMutationReadyFn;
    'options': MutationOptions;
    'variables': any;
  }
  interface ApolloMutationAttributes extends StencilHTMLAttributes {
    'client'?: ApolloClient<any>;
    'mutation'?: DocumentNode;
    'onReady'?: OnMutationReadyFn;
    'options'?: MutationOptions;
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
    'onReady': OnQueryReadyFn<any>;
    'options': WatchQueryOptions;
    'query': DocumentNode;
    'variables': any;
  }
  interface ApolloQueryAttributes extends StencilHTMLAttributes {
    'client'?: ApolloClient<any>;
    'onReady'?: OnQueryReadyFn<any>;
    'options'?: WatchQueryOptions;
    'query'?: DocumentNode;
    'variables'?: any;
  }

  interface ApolloSubscription {
    'client': ApolloClient<any>;
    'onReady': OnSubscriptionReadyFn<any>;
    'options': SubscriptionOptions;
    'subscription': DocumentNode;
    'variables': any;
  }
  interface ApolloSubscriptionAttributes extends StencilHTMLAttributes {
    'client'?: ApolloClient<any>;
    'onReady'?: OnSubscriptionReadyFn<any>;
    'options'?: SubscriptionOptions;
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
