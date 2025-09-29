import { Meta, StoryObj } from "@storybook/nextjs";
import { AuthForm } from "./auth-form";

const meta: Meta<typeof AuthForm> = {
  title: 'Components/Auth/AuthForm',
  component: AuthForm,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Formulario de autenticación reutilizable para Sign In y Sign Up.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['signin', 'signup'],
      description: 'Modo del formulario: inicio de sesión o registro',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SignIn: Story = {
  args: {
    mode: 'signin',
  },
};

export const SignUp: Story = {
  args: {
    mode: 'signup',
  },
};