import { redirect } from 'next/navigation';

function AdminPage() {
  // Can check some logic in here before redirect to dashboard
  redirect('/admin/dashboard');
}

export default AdminPage;
