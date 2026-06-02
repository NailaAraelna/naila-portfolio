export default function Hero() {
  return (
    <section
      className="
      min-h-screen
      flex
      items-center
      justify-center
      relative
      overflow-hidden
      px-6
      "
    >

      {/* Blob 1 */}

      <div
        className="
        absolute
        w-[400px]
        h-[400px]
        rounded-full
        bg-pink-300/40
        blur-[100px]
        -top-20
        -left-20
        "
      />

      {/* Blob 2 */}

      <div
        className="
        absolute
        w-[350px]
        h-[350px]
        rounded-full
        bg-purple-300/40
        blur-[100px]
        bottom-0
        right-0
        "
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}

        <div>

          <span
            className="
          bg-pink-100
          text-pink-600
          dark:bg-pink-500/10
          dark:text-pink-300
            px-6
            py-2
            rounded-full
            font-medium
            "
          >
            UI/UX Designer & Graphic Designer
          </span>

          <h1
            className="
            mt-6
            text-5xl
            md:text-7xl
            font-black
            leading-tight
            "
          >
            Designing
            <br />

            <span
              className="
              bg-gradient-to-r
              from-pink-500
              via-purple-500
              to-blue-500
              bg-clip-text
              text-transparent
              "
            >
              Beautiful
            </span>

            <br />

            Experiences
          </h1>

          <p
            className="
            mt-6
            text-gray-600
            dark:text-gray-300
            text-lg
            max-w-lg
            "
          >
            HALOOO INI WEBSITE PERTAMA NAILAAA, DOAKAN SEMOGA TIDAK ERROR SAMPAI AKHIR YAKKKKKKKK
          </p>

          <div className="flex gap-4 mt-8">

            <button
              className="
              px-7
              py-4
              rounded-full
              bg-gradient-to-r
              from-pink-500
              to-purple-500
              text-white
              font-semibold
              shadow-lg
              "
            >
              View Projects
            </button>

            <button
              className="
              px-7
              py-4
              rounded-full
              border-2
             border-pink-300
             dark:border-pink-500
             dark:text-white
              "
            >
              Contact Me
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex justify-center">

          <div
            className="
            w-[350px]
            h-[350px]
            rounded-[40px]
            bg-gradient-to-br
            from-pink-300
            via-purple-300
            to-blue-300
            shadow-2xl
            flex
            items-center
            justify-center
            text-[120px]
            "
          >
            👩🏻‍🎨
          </div>

        </div>

      </div>

    </section>
  );
}