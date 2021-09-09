import Logo from "./logo";

export default function Header({ data: settings }) {
  return (
    <>
      <header>
        <div className="logo">
          {settings?.title}
          <Logo />
        </div>
      </header>
      <nav>
        <div>
          <ul>
            {settings.socialMedia?.length > 0 &&
              settings.socialMedia.map((socialMedium) => (
                <li key={socialMedium._key}>
                  <a href={socialMedium.url} target="_blank" rel="noreferrer">
                    {socialMedium.name}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
