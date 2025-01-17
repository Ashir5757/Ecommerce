
import prismadb from '@/lib/prismadb';

interface DashboardPageProps {
  params: {
    storeId: string;
  }
}

const DashboardPage: React.FC<DashboardPageProps> = async ({
  params
}) => {
  const storeid = await prismadb.store.findFirst({
    where: {
      id: params.storeId
    }
  });
  return (
  <div> Active Store: {storeid?.name} </div>
  )
}

export default DashboardPage;