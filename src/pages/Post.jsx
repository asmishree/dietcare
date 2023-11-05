import React from "react";

function Post() {
  return (
    <section>
      <div className="container m-auto">
        <h5 className="my-8 tracking-widest text-lg">BLOG POST</h5>
        <div className="blog-title">
          <h1>{blog?.title}</h1>
          <div>
            {/* <PublishBy />
            <FormattedDate createdAt={blog?.createdAt} /> */}
          </div>
        </div>
      </div>

      <div className="blog-body">
        <img src={blog?.image} />

        <div className="container m-auto">
          <h2 className="py-10 ">
            To wrap up our second launch week, we're releasing our Ecommerce
            starter kit. It demonstrates the strength of Payload and how it can
            be used to power much more than simple website content.
          </h2>
          <div className="blog-description" dangerouslySetInnerHTML={{ __html: blog?.description }} />
        </div>
      </div>
    </section>
  );
}

const blog = {
  slug: "how-to-create-a-custom",
  title: "How to Create a Custom Select Field in Payload: A Step-by-Step Guide",
  summary:
    "This quick tutorial will guide you through the process of creating a custom select component, demonstrating how to override default UI components, how to import options from an external API, and storing your custom values.",
  description:
    "<h1>Descriptions can now be added to the admin UI on Fields, Globals and Collections</h1><p><br></p><p>Descriptions are useful for giving contextual information to help content authors in the admin UI. They can be set with static text or made to give dynamic feedback to support a variety of use cases. You can configure descriptions on fields, collections and globals.</p><p><br></p><ul><li>All the description properties support three types:<br><br>String<br>Function returning a string<br>React Component to be rendered<br>Let us explore some examples that represent real-world use cases.</li></ul><p><br></p><h2>Field Descriptions</h2><p>On most field types the description will be displayed immediately after the input; Field types&nbsp;array,&nbsp;block, and&nbsp;group&nbsp;will show the description below the label. A collection configured with simple text field descriptions would look like the following:</p>",
  image:
    "https://res.cloudinary.com/di7jdhpqh/image/upload/v1693408465/lxubjfdbtqepnkdt4nfp.webp",
  tags: ["hia", "hello"],
  status: "DRAFT",
  createdAt: "Mar 10, 2020",
};

export default Post;
