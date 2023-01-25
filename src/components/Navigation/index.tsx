import { FC } from 'react'

interface NavigationProps {
  handleLogout: () => void
  handleSearch: React.ChangeEventHandler<HTMLInputElement>
  value: string
  showSearch: boolean
}

const Navigation: FC<NavigationProps> = ({
  handleLogout,
  handleSearch,
  value,
  showSearch,
}) => {
  return (
    <nav
      className="navbar bg-body-tertiary sticky-top"
      style={{ marginBottom: '1rem' }}
    >
      <div className="container-fluid">
        <a className="navbar-brand">Welcome!</a>
        <form className="d-flex" role="search">
          {showSearch && (
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleSearch}
              value={value}
            />
          )}

          <button
            className="btn btn-outline-success "
            type="submit"
            onClick={handleLogout}
          >
            Logout
          </button>
        </form>
      </div>
    </nav>
  )
}

export default Navigation
