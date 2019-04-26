{
  "trigger": {
    "schedule": {
      "interval": "5m"
    }
  },
  "input": {
    "search": {
      "request": {
        "search_type": "query_then_fetch",
        "indices": [
          "pcf-*"
        ],
        "types": [],
        "body": {
          "query": {
            "bool": {
              "must": {
                "query_string": {
                  "query": "cf_org_name:\"rxid\" AND appmsg.level:\"ERROR\" AND NOT (appmsg.message:\"Line item id: 'submitChanges' is not a valid number\") AND NOT (appmsg.message:\"Missing Authorization header\") AND NOT (appmsg.message:\"0:0: unexpected end of subtree\") AND NOT (appmsg.stack_trace:\"org.springframework.security.authentication.BadCredentialsException\") AND NOT (appmsg.stack_trace:\"org.springframework.security.authentication.DisabledException\") AND NOT (appmsg.stack_trace:\"java.lang.NumberFormatException\")"
                }
              },
              "filter": {
                "bool": {
                  "must": [
                    {
                      "range": {
                        "@timestamp": {
                          "gte": "now-5m"
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      }
    }
  },
  "condition": {
    "compare": {
      "ctx.payload.hits.total": {
        "gte": 1
      }
    }
  },
  "actions": {
    "notify_slack": {
      "throttle_period_in_millis": 360000,
      "slack": {
        "message": {
          "from": "Kibana Watcher",
          "to": [
            "#rxid-monitoring"
          ],
          "text": "<!channel> Errors have been detected in logs from RxID.  Number of Errors: {{ctx.payload.hits.total}}",
          "dynamic_attachments": {
            "list_path": "ctx.payload.hits.hits",
            "attachment_template": {
              "color": "danger",
              "pretext": "{{_source.cf_app_name}}",
              "title": "{{_source.appmsg.message}}",
              "text": "```{{_source.appmsg}}```"
            }
          }
        }
      }
    },
    "send_email": {
      "throttle_period_in_millis": 360000,
      "email": {
        "profile": "standard",
        "priority": "high",
        "to": [
          "brian.gantzler@cardinalhealth.com"
        ],
        "subject": "Errors have been detected in logs from RxID.  Number of Errors: {{ctx.payload.hits.total}}",
        "body": {
          "text": "[{{#ctx.payload.hits.hits}} {\"PCF app name\": \"{{_source.cf_app_name}}\", \"Timestamp(GMT)\": \"{{_source.@timestamp}}\", \"Message content\": {{_source.appmsg}} } {{/ctx.payload.hits.hits}}]"
        }
      }
    }
  }
}