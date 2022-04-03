const mongoose = require("mongoose")
const { Schema } = mongoose;

const companySchema = new Schema({
    name: {type: String, required: true},
    permalink: String,
    crunchbase_url: String,
    homepage_url: String,
    blog_url: String,
    blog_feed_url: String,
    twitter_username: String,
    category_code: String,
    number_of_employees: Number,
    founded_year: Number,
    founded_month: Number,
    founded_day: Number,
    deadpooled_year: Number,
    tag_list: String,
    alias_list: String,
    email_address: String,
    phone_number: String,
    description: String,
    created_at: String,
    updatedAt: String,
    overview: String,
    image: {
        available_sizes: []
    },
    products: [{
        name: String,
        permalink: String
    }],
    relationships: [{
        is_past: Boolean,
        title: String,
        person: {
            first_name: String,
            last_name: String,
            permalink: String
        }
    }],
    competitions: [{
        competitor: String,
        name: String,
        permalink: String
    }],
    providerships: [],
    total_money_raised: String,
    funding_rounds: [{
        id: Number,
        round_code: String,
        source_url: String,
        source_description: String,
        raised_amount: Number,
        raised_currency_code: String,
        funded_year: Number,
        funded_month: Number,
        founded_day: Number,
        investments: [{
            company: Schema.Types.Mixed,
            financial_org: {
                name: String,
                permalink: String
            },
            person: Schema.Types.Mixed
        }],

    }],
    investments: [],
    acquisition: {
        price_amount: Number,
        price_currency_code: String,
        term_code: String,
        source_url: String,
        source_description: String,
        acquired_year: Number,
        acquired_month: Number,
        acquired_day: Number,
    },
    acquisitions: [],
    offices: [{
        description: String,
        address1: String,
        address2: String,
        zip_code: String,
        city: String,
        state_code: String,
        country_code: String,
        latitude: Number,
        longitude: Number
    }],
    milestones: [{
        id: Number,
        description: String,
        stoned_year: Number,
        stoned_month: Number,
        stoned_day: Number,
        source_url: String,
        source_text: Schema.Types.Mixed,
        source_description: String,
        stoneable_type: String,
        stoned_value: Schema.Types.Mixed,
        stoned_value_type: Schema.Types.Mixed,
        stoned_acquirer: Schema.Types.Mixed,
        stoneable: {
            name: String,
            permalink: String,
        }
    }],
    video_embeds: [],
    screenshots: [{
        available_sizes: [[]],
        attribution: Schema.Types.Mixed
    }],
    external_links: [{
        external_url: String,
        title: String
    }],
    partners: []

});

module.exports = mongoose.model('Companies', companySchema);