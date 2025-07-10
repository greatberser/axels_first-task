import TrackingForm from './TrackingForm';
import { Meta, StoryObj } from '@storybook/react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const meta: Meta<typeof TrackingForm> = {
  title: 'Components/TrackingForm',
  component: TrackingForm,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ApolloProvider client={client}>
        <Story />
      </ApolloProvider>
    ),
  ],
};

export default meta;

export const Default: StoryObj = {
  render: () => <TrackingForm />,
};
