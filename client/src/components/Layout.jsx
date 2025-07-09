import Navbar from './Navbar';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="p-4">{children}</main>
  </>
);

export default Layout;
