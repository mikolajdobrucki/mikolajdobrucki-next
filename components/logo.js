import styles from "../styles/Logo.module.css";

export default function Logo() {
  return (
    <svg
      className={styles.logo_full}
      width="241"
      height="84"
      viewBox="0 0 241 84"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 33.936V10.224H5.424V12.864H6.24C6.656 12.064 7.344 11.36 8.304 10.752C9.296 10.112 10.608 9.792 12.24 9.792C13.968 9.792 15.36 10.144 16.416 10.848C17.472 11.552 18.272 12.448 18.816 13.536H19.584C20.128 12.448 20.912 11.552 21.936 10.848C22.96 10.144 24.416 9.792 26.304 9.792C27.776 9.792 29.104 10.112 30.288 10.752C31.504 11.392 32.464 12.336 33.168 13.584C33.904 14.832 34.272 16.384 34.272 18.24V33.936H28.752V18.624C28.752 17.248 28.384 16.208 27.648 15.504C26.912 14.768 25.888 14.4 24.576 14.4C23.136 14.4 21.984 14.88 21.12 15.84C20.288 16.768 19.872 18.112 19.872 19.872V33.936H14.4V18.624C14.4 17.248 14.032 16.208 13.296 15.504C12.56 14.768 11.536 14.4 10.224 14.4C8.752 14.4 7.6 14.88 6.768 15.84C5.936 16.768 5.52 18.112 5.52 19.872V33.936H0Z" />
      <path d="M41.0625 33.936V10.224H46.5825V33.936H41.0625ZM43.7985 7.2C42.8065 7.2 41.9425 6.88 41.2065 6.24C40.5025 5.568 40.1505 4.688 40.1505 3.6C40.1505 2.512 40.5025 1.648 41.2065 1.008C41.9425 0.335999 42.8065 0 43.7985 0C44.8545 0 45.7185 0.335999 46.3905 1.008C47.0945 1.648 47.4465 2.512 47.4465 3.6C47.4465 4.688 47.0945 5.568 46.3905 6.24C45.7185 6.88 44.8545 7.2 43.7985 7.2Z" />
      <path d="M53.5781 33.936V0.335999H59.0981V19.2H59.9141L68.4581 10.224H75.7061L64.2341 21.696L76.0901 33.936H68.9381L59.9141 24.288H59.0981V33.936H53.5781Z" />
      <path d="M90.1695 34.608C87.8015 34.608 85.6735 34.128 83.7855 33.168C81.9295 32.176 80.4575 30.784 79.3695 28.992C78.3135 27.168 77.7855 24.992 77.7855 22.464V21.696C77.7855 19.168 78.3135 16.992 79.3695 15.168C80.4575 13.344 81.9295 11.952 83.7855 10.992C85.6735 10.032 87.8015 9.552 90.1695 9.552C92.5375 9.552 94.6495 10.032 96.5055 10.992C98.3615 11.952 99.8175 13.344 100.874 15.168C101.962 16.992 102.506 19.168 102.506 21.696V22.464C102.506 24.992 101.962 27.168 100.874 28.992C99.8175 30.784 98.3615 32.176 96.5055 33.168C94.6495 34.128 92.5375 34.608 90.1695 34.608ZM90.1695 29.712C92.1855 29.712 93.8335 29.072 95.1135 27.792C96.3935 26.48 97.0335 24.656 97.0335 22.32V21.84C97.0335 19.504 96.3935 17.696 95.1135 16.416C93.8335 15.104 92.1855 14.448 90.1695 14.448C88.1535 14.448 86.5055 15.104 85.2255 16.416C83.9455 17.696 83.3055 19.504 83.3055 21.84V22.32C83.3055 24.656 83.9455 26.48 85.2255 27.792C86.5055 29.072 88.1535 29.712 90.1695 29.712Z" />
      <path d="M108.375 33.936V0.335999H113.895V33.936H108.375Z" />
      <path d="M128.235 34.608C126.571 34.608 125.067 34.32 123.723 33.744C122.379 33.136 121.307 32.272 120.507 31.152C119.739 30.032 119.355 28.656 119.355 27.024C119.355 25.424 119.739 24.08 120.507 22.992C121.307 21.904 122.395 21.088 123.771 20.544C125.147 19.968 126.715 19.68 128.475 19.68H135.339V18.24C135.339 16.992 134.955 15.984 134.187 15.216C133.419 14.416 132.219 14.016 130.587 14.016C128.987 14.016 127.771 14.4 126.939 15.168C126.139 15.904 125.611 16.864 125.355 18.048L120.267 16.368C120.651 15.12 121.259 13.984 122.091 12.96C122.955 11.936 124.091 11.12 125.499 10.512C126.907 9.872 128.635 9.552 130.683 9.552C133.787 9.552 136.219 10.336 137.979 11.904C139.771 13.44 140.667 15.68 140.667 18.624V27.936C140.667 28.896 141.115 29.376 142.011 29.376H144.027V33.936H140.139C138.987 33.936 138.043 33.648 137.307 33.072C136.571 32.496 136.203 31.712 136.203 30.72V30.624H135.387C135.195 31.072 134.859 31.616 134.379 32.256C133.899 32.896 133.163 33.456 132.171 33.936C131.211 34.384 129.899 34.608 128.235 34.608ZM129.147 30.096C130.971 30.096 132.459 29.584 133.611 28.56C134.763 27.504 135.339 26.096 135.339 24.336V23.856H128.811C127.627 23.856 126.667 24.112 125.931 24.624C125.195 25.136 124.827 25.888 124.827 26.88C124.827 27.84 125.211 28.624 125.979 29.232C126.747 29.808 127.803 30.096 129.147 30.096Z" />
      <path d="M144.13 43.536V38.784H147.346C148.242 38.784 148.69 38.304 148.69 37.344V10.224H154.21V38.448C154.21 40.016 153.746 41.248 152.818 42.144C151.922 43.072 150.706 43.536 149.17 43.536H144.13ZM151.426 7.2C150.434 7.2 149.57 6.88 148.834 6.24C148.13 5.568 147.778 4.688 147.778 3.6C147.778 2.512 148.13 1.648 148.834 1.008C149.57 0.335999 150.434 0 151.426 0C152.482 0 153.346 0.335999 154.018 1.008C154.722 1.648 155.074 2.512 155.074 3.6C155.074 4.688 154.722 5.568 154.018 6.24C153.346 6.88 152.482 7.2 151.426 7.2Z" />
      <path d="M17.6424 83.608C16.4264 83.608 15.4024 83.208 14.5704 82.408C13.7704 81.608 13.3704 80.584 13.3704 79.336C13.3704 78.12 13.7704 77.112 14.5704 76.312C15.4024 75.512 16.4264 75.112 17.6424 75.112C18.8584 75.112 19.8664 75.512 20.6664 76.312C21.4664 77.112 21.8664 78.136 21.8664 79.384C21.8664 80.632 21.4664 81.656 20.6664 82.456C19.8664 83.224 18.8584 83.608 17.6424 83.608ZM17.6424 67C16.4264 67 15.4024 66.6 14.5704 65.8C13.7704 65 13.3704 63.976 13.3704 62.728C13.3704 61.512 13.7704 60.504 14.5704 59.704C15.4024 58.904 16.4264 58.504 17.6424 58.504C18.8584 58.504 19.8664 58.904 20.6664 59.704C21.4664 60.504 21.8664 61.528 21.8664 62.776C21.8664 64.024 21.4664 65.048 20.6664 65.848C19.8664 66.616 18.8584 67 17.6424 67Z" />
      <path d="M49.946 83.608C48.026 83.608 46.234 83.144 44.57 82.216C42.906 81.256 41.578 79.864 40.586 78.04C39.594 76.216 39.098 74.024 39.098 71.464V70.696C39.098 68.136 39.594 65.944 40.586 64.12C41.578 62.296 42.89 60.92 44.522 59.992C46.186 59.032 47.994 58.552 49.946 58.552C51.418 58.552 52.666 58.728 53.69 59.08C54.714 59.432 55.53 59.88 56.138 60.424C56.778 60.968 57.274 61.56 57.626 62.2H58.442V49.336H63.914V82.936H58.538V79.816H57.722C57.146 80.776 56.266 81.656 55.082 82.456C53.898 83.224 52.186 83.608 49.946 83.608ZM51.578 78.808C53.562 78.808 55.21 78.168 56.522 76.888C57.834 75.576 58.49 73.72 58.49 71.32V70.84C58.49 68.408 57.834 66.552 56.522 65.272C55.242 63.992 53.594 63.352 51.578 63.352C49.594 63.352 47.93 63.992 46.586 65.272C45.274 66.552 44.618 68.408 44.618 70.84V71.32C44.618 73.72 45.274 75.576 46.586 76.888C47.93 78.168 49.594 78.808 51.578 78.808Z" />
      <path d="M82.1383 83.608C79.7703 83.608 77.6422 83.128 75.7542 82.168C73.8982 81.176 72.4262 79.784 71.3382 77.992C70.2822 76.168 69.7542 73.992 69.7542 71.464V70.696C69.7542 68.168 70.2822 65.992 71.3382 64.168C72.4262 62.344 73.8982 60.952 75.7542 59.992C77.6422 59.032 79.7703 58.552 82.1383 58.552C84.5063 58.552 86.6183 59.032 88.4743 59.992C90.3303 60.952 91.7863 62.344 92.8423 64.168C93.9303 65.992 94.4743 68.168 94.4743 70.696V71.464C94.4743 73.992 93.9303 76.168 92.8423 77.992C91.7863 79.784 90.3303 81.176 88.4743 82.168C86.6183 83.128 84.5063 83.608 82.1383 83.608ZM82.1383 78.712C84.1543 78.712 85.8023 78.072 87.0823 76.792C88.3623 75.48 89.0023 73.656 89.0023 71.32V70.84C89.0023 68.504 88.3623 66.696 87.0823 65.416C85.8023 64.104 84.1543 63.448 82.1383 63.448C80.1223 63.448 78.4743 64.104 77.1943 65.416C75.9143 66.696 75.2743 68.504 75.2743 70.84V71.32C75.2743 73.656 75.9143 75.48 77.1943 76.792C78.4743 78.072 80.1223 78.712 82.1383 78.712Z" />
      <path d="M114.36 83.608C112.12 83.608 110.392 83.224 109.176 82.456C107.992 81.656 107.128 80.776 106.584 79.816H105.768V82.936H100.344V49.336H105.864V62.2H106.68C107.032 61.56 107.512 60.968 108.12 60.424C108.76 59.88 109.576 59.432 110.568 59.08C111.592 58.728 112.856 58.552 114.36 58.552C116.312 58.552 118.104 59.032 119.736 59.992C121.368 60.92 122.68 62.296 123.672 64.12C124.664 65.944 125.16 68.136 125.16 70.696V71.464C125.16 74.024 124.664 76.216 123.672 78.04C122.68 79.864 121.352 81.256 119.688 82.216C118.056 83.144 116.28 83.608 114.36 83.608ZM112.728 78.808C114.712 78.808 116.36 78.168 117.672 76.888C118.984 75.576 119.64 73.72 119.64 71.32V70.84C119.64 68.408 118.984 66.552 117.672 65.272C116.392 63.992 114.744 63.352 112.728 63.352C110.744 63.352 109.08 63.992 107.736 65.272C106.424 66.552 105.768 68.408 105.768 70.84V71.32C105.768 73.72 106.424 75.576 107.736 76.888C109.08 78.168 110.744 78.808 112.728 78.808Z" />
      <path d="M131 82.936V59.224H136.424V61.96H137.24C137.592 60.968 138.184 60.248 139.016 59.8C139.848 59.352 140.84 59.128 141.992 59.128H144.872V64.024H141.896C140.296 64.024 139 64.456 138.008 65.32C137.016 66.152 136.52 67.448 136.52 69.208V82.936H131Z" />
      <path d="M158.822 83.32C156.998 83.32 155.382 82.92 153.974 82.12C152.566 81.288 151.478 80.136 150.71 78.664C149.942 77.16 149.558 75.416 149.558 73.432V59.224H155.03V73C155.03 74.92 155.494 76.344 156.422 77.272C157.382 78.2 158.726 78.664 160.454 78.664C162.406 78.664 163.942 78.024 165.062 76.744C166.214 75.464 166.79 73.624 166.79 71.224V59.224H172.262V82.936H166.886V79.624H166.07C165.654 80.488 164.886 81.32 163.766 82.12C162.678 82.92 161.03 83.32 158.822 83.32Z" />
      <path d="M190.369 83.608C188.065 83.608 185.985 83.128 184.129 82.168C182.273 81.208 180.801 79.816 179.713 77.992C178.657 76.168 178.129 73.976 178.129 71.416V70.744C178.129 68.184 178.657 65.992 179.713 64.168C180.801 62.344 182.273 60.952 184.129 59.992C185.985 59.032 188.065 58.552 190.369 58.552C192.641 58.552 194.577 58.952 196.177 59.752C197.809 60.552 199.121 61.656 200.113 63.064C201.105 64.44 201.745 65.992 202.033 67.72L196.705 68.824C196.577 67.832 196.273 66.936 195.793 66.136C195.313 65.304 194.625 64.648 193.729 64.168C192.865 63.688 191.793 63.448 190.513 63.448C189.201 63.448 188.017 63.736 186.961 64.312C185.937 64.856 185.121 65.688 184.513 66.808C183.937 67.928 183.649 69.272 183.649 70.84V71.32C183.649 72.888 183.937 74.232 184.513 75.352C185.121 76.44 185.937 77.272 186.961 77.848C188.017 78.424 189.201 78.712 190.513 78.712C192.465 78.712 193.937 78.216 194.929 77.224C195.953 76.2 196.593 74.888 196.849 73.288L202.177 74.536C201.793 76.2 201.105 77.72 200.113 79.096C199.121 80.472 197.809 81.576 196.177 82.408C194.577 83.208 192.641 83.608 190.369 83.608Z" />
      <path d="M207.547 82.936V49.336H213.067V68.2H213.883L222.427 59.224H229.675L218.203 70.696L230.059 82.936H222.907L213.883 73.288H213.067V82.936H207.547Z" />
      <path d="M234.312 82.936V59.224H239.833V82.936H234.312ZM237.049 56.2C236.057 56.2 235.192 55.88 234.456 55.24C233.752 54.568 233.4 53.688 233.4 52.6C233.4 51.512 233.752 50.648 234.456 50.008C235.192 49.336 236.057 49 237.049 49C238.105 49 238.969 49.336 239.641 50.008C240.345 50.648 240.697 51.512 240.697 52.6C240.697 53.688 240.345 54.568 239.641 55.24C238.969 55.88 238.105 56.2 237.049 56.2Z" />

      <g className={styles.logo_full_mask}>
        <rect
          className={styles.logo_full_maskshape}
          x="156"
          width="154"
          height="48"
        />
        <rect x="158" y="36" width="23" height="4" />
      </g>
    </svg>
  );
}
