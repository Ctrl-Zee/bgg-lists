import { createFileRoute } from '@tanstack/react-router';
import { Page } from '../components/Page';
import { AccountForm } from '../features/account/components/AccountForm';
import { useAccountInfo } from '../features/account/hooks/useAccountInfo';
import { useUserId } from '../stores/userStore';

export const Route = createFileRoute('/account')({
  component: RouteComponent,
});

function RouteComponent() {
  const id = useUserId();
  const { data: profile } = useAccountInfo(id);
  return (
    <Page>
      <div>{profile && <AccountForm profile={profile} />}</div>
    </Page>
  );
}
